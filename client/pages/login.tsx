import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Quicksand } from "next/font/google";
import { useRouter } from "next/router";

const quicksand = Quicksand({
  weight: "700",
  subsets: ["latin"],
});

const LoginPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const [data, setData] = useState();

  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      const data: any = await supabaseClient.from("users").select("*");
      setData(data);
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  if (!user) {
    return (
      <Layout>
        <div className="max-w-3xl m-auto bg-[#212121] p-10 rounded-md mt-40">
          <Auth
            redirectTo={`${
              typeof window !== "undefined" && window.location.origin
                ? window.location.origin
                : "http://localhost:3000"
            }`}
            appearance={{
              theme: ThemeSupa,
              className: {
                anchor: quicksand.className,
                button: quicksand.className,
                container: quicksand.className,
              },
            }}
            supabaseClient={supabaseClient}
            providers={["google", "github"]}
            socialLayout="horizontal"
            theme="dark"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <>
        <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
        <p>user:</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <p>client-side data fetching with RLS</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
    </Layout>
  );
};

export default LoginPage;
