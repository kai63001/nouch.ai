import { Avatar, Username } from "@/libs/user";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const quicksand = Quicksand({
  weight: "700",
  subsets: ["latin"],
});

const Navbar = () => {
  const router = useRouter();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const [username, setUsername] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownHamburger, setShowDropdownHamburger] = useState(false);
  const dropdown: any = useRef(null);
  const dropdownHamburger: any = useRef(null);
  const [screemSize, setScreemSize] = useState(0)

  useEffect(() => {
    setScreemSize(window.innerWidth)
  }, [screemSize])

  useEffect(() => {
    if (!showDropdown) return;
    function handleClick(event: { target: any; }) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  })

  useEffect(() => {
    if (!showDropdownHamburger) return;
    function handleClickHamburger(event: { target: any; }) {
      if (dropdownHamburger.current && !dropdownHamburger.current.contains(event.target)) {
        setShowDropdownHamburger(false);
      }
    }
    window.addEventListener("click", handleClickHamburger);
    // clean up
    return () => window.removeEventListener("click", handleClickHamburger);
  })

  //check login useEffect
  useEffect(() => {
    if(!supabaseClient) return;
    const { data: authListener } = supabaseClient?.auth?.onAuthStateChange(
      async (event, session) => {
        // check local storage for user data
        const userData = localStorage.getItem("user");
        if (event === "SIGNED_IN" && !userData) {
          getUserData(event, session);
        }
        if (event === "SIGNED_OUT") {
          localStorage.removeItem("user");
          setUsername(null);
          setAvatar(null);
        }
      }
    );
    //unsubscribe
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabaseClient.auth.signOut();
    router.push("/");
  };

  const getUserData = async (event: any, session: any) => {
    const { data: user, error } = await supabaseClient
      .from("users")
      .select("*")
      .eq("id", session.user.id)
      .single();
    if (error) {
      console.error(error);
      return;
    }
    setUsername(user.username);
    setAvatar(user.picture);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const user = useUser();
  //useEffect when localStorage is updated
  return (
    <nav className={`flex justify-between p-8 ${quicksand.className}`}>
      <div className="flex gap-2 items-center">
        {screemSize < 500 && <div ref={dropdownHamburger} className="p-[10px] bg-[#242627] active:bg-[#414446] rounded-[12px]" onClick={() => setShowDropdownHamburger(!showDropdownHamburger)} ><Image width={20} height={20} src={"/icon/hamburger.svg"} alt={"hamburger"} /></div>}
        <Link href='/'>
          <Image width={100} height={40} src={'/icon/logo-nouch.svg'} alt={"logo-nouch"} />
        </Link>
        {showDropdownHamburger && (
          <div >
            {/*  backdrop-blur-sm  for add blur */}
            {screemSize < 500 && <div className="w-[100vw] h-[100vh] top-0 left-0 bg-black/70 fixed z-[49]" />}
            <div className="shadow-[0_35px_60px_-15px_blur(8px)] absolute bg-[#1E1E1E] flex items-center flex-col rounded-md w-full gap-[16px] top-24 left-0 lg:left-10 z-50">
              <div className="mt-[24px]"><Image width={100} height={40} src={'/icon/logo-nouch.svg'} alt={"logo-nouch"} /></div>
              <input className="bg-[#333434] w-[320px] rounded-[64px] h-11 pl-5" placeholder="Search items..." type="text" />
              <div className="w-[320px] flex flex-col gap-[24px] mb-[24px]">
                <div>Explore</div>
                <div>Create</div>
                <div>Docs</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden gap-6 items-center lg:flex">
        <div className="hover:underline cursor-pointer">Explore</div>
        <div className="hover:underline cursor-pointer">Create</div>
        <div className="hover:underline cursor-pointer">Docs</div>
        <div className="relative flex items-center" >
          <input className="bg-[#1D1E1F] w-[420px] rounded-[64px] h-11 pl-5" placeholder="Search items..." type="text" />
          <svg className="absolute right-5 cursor-pointer" width="30" height="30" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.7583 16.075L14.925 13.25C15.8392 12.0854 16.3352 10.6472 16.3333 9.16667C16.3333 7.84813 15.9423 6.5592 15.2098 5.46287C14.4773 4.36654 13.4361 3.51206 12.2179 3.00747C10.9997 2.50289 9.65927 2.37087 8.36607 2.6281C7.07286 2.88534 5.88497 3.52027 4.95262 4.45262C4.02027 5.38497 3.38534 6.57286 3.1281 7.86607C2.87087 9.15927 3.00289 10.4997 3.50747 11.7179C4.01206 12.9361 4.86654 13.9773 5.96287 14.7098C7.0592 15.4423 8.34813 15.8333 9.66667 15.8333C11.1472 15.8352 12.5854 15.3392 13.75 14.425L16.575 17.2583C16.6525 17.3364 16.7446 17.3984 16.8462 17.4407C16.9477 17.4831 17.0567 17.5048 17.1667 17.5048C17.2767 17.5048 17.3856 17.4831 17.4872 17.4407C17.5887 17.3984 17.6809 17.3364 17.7583 17.2583C17.8364 17.1809 17.8984 17.0887 17.9407 16.9872C17.9831 16.8856 18.0048 16.7767 18.0048 16.6667C18.0048 16.5567 17.9831 16.4477 17.9407 16.3462C17.8984 16.2446 17.8364 16.1525 17.7583 16.075ZM4.66667 9.16667C4.66667 8.17776 4.95991 7.21106 5.50932 6.38882C6.05873 5.56657 6.83962 4.92571 7.75325 4.54727C8.66688 4.16883 9.67222 4.06982 10.6421 4.26274C11.612 4.45567 12.5029 4.93187 13.2022 5.63114C13.9015 6.3304 14.3777 7.22131 14.5706 8.19122C14.7635 9.16112 14.6645 10.1665 14.2861 11.0801C13.9076 11.9937 13.2668 12.7746 12.4445 13.324C11.6223 13.8734 10.6556 14.1667 9.66667 14.1667C8.34059 14.1667 7.06882 13.6399 6.13114 12.7022C5.19345 11.7645 4.66667 10.4928 4.66667 9.16667Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="flex gap-6">
        {!user ? (
          <Link
            href="/login"
            className="bg-white text-black pl-5 p-5 pb-3 pt-3 rounded-[64px] cursor-pointer font-semibold"
          >
            Log in
          </Link>
        ) : (
          <div className="pl-3 pr-3 lg:pl-5 lg:p-5 pb-3 pt-3 cursor-pointer relative select-none">
            <div ref={dropdown} className="flex items-center space-x-0 lg:space-x-3" onClick={() => setShowDropdown(!showDropdown)}>
              <Image
                src={Avatar(user?.user_metadata, avatar)}
                width={32}
                height={32}
                className="rounded-full"
                alt={`avatar of ${user?.email}`}
              />
              <p>{screemSize > 500 && Username(username)}</p>
            </div>
            {showDropdown && (
              <div>
                {screemSize < 500 && <div className="w-[100vw] h-[100vh] top-0 left-0 bg-black/70 fixed z-[49]" />}
                <div className="absolute bg-[#1E1E1E] rounded-md w-[200px] mt-5 right-0 lg:right-10 border-[#383838] border z-50">
                  {/* dropdown */}
                  <div className="flex flex-col gap-2 py-2 border-b border-[#383838]">
                    <Link href="/profile" className="p-2 hover:bg-[#2E2E2E]">
                      Profile
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2 py-2 border-b border-[#383838]">
                    <Link href="/profile" className="p-2 hover:bg-[#2E2E2E]">
                      Edit Profile
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2 py-2 border-b border-[#383838]">
                    <Link href="/profile" className="p-2 hover:bg-[#2E2E2E]">
                      My Prompts
                    </Link>
                    <Link href="/profile" className="p-2 hover:bg-[#2E2E2E]">
                      My Favorites
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2 py-2">
                    <div onClick={logout} className="p-2 hover:bg-[#2E2E2E]">
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
