import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  //check login useEffect
  useEffect(() => {
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      async (event, session) => {
        // check local storage for user data
        const userData = localStorage.getItem("user");
        if (event === "SIGNED_IN" && !userData){
          getUserData(event, session)
        }
        if (event === "SIGNED_OUT") {
          localStorage.removeItem("user");
        }
      }
    );
    //unsubscribe
    return () => {
      authListener.subscription.unsubscribe()
    }
  }, []);


  const getUserData = async (event:any, session:any) => {
    const { data: user, error } = await supabaseClient
      .from("users")
      .select("*")
      .eq("id", session.user.id)
      .single();
    if (error) {
      console.error(error);
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
  }
    

  

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}

export default MyApp;
