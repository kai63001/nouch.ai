import { setFromCreatePrompt } from "@/store/formPromptDataSlice";
import { RootState } from "@/store/store";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PaymentSetup = () => {
  const supabase = useSupabaseClient();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountryStripe();
  }, []);

  const getCountryStripe = async () => {
    const { data, error }: any = await supabase
      .from("countryStripe")
      .select("*");
    if (error) {
      console.log(error);
      return;
    }
    setCountries(data);
  };

  const dispath = useDispatch();

  const fromCreatePrompt = useSelector(
    (state: RootState) => state.FromCreatePromptSlice
  );

  const setDispath = (field: any, value: any) => {
    dispath(
      setFromCreatePrompt({
        ...fromCreatePrompt,
        [field]: value,
      })
    );
  };

  return (
    <div>
      <h1 className="mb-2 text-2xl">Payment Setup</h1>
      {/* option country */}
      <div className="relative">
        <select
          id="country"
          name="country"
          className="border px-4 py-2 w-full rounded-md bg-transparent appearance-none"
          defaultValue={"0"}
        >
          <option value="0" disabled>
            Select your country
          </option>
          {countries.map((country: any) => (
            <option key={country.id} value={country.id}>
              {country.country}
            </option>
          ))}
        </select>
        <div className="w-full mt-5">
          <button
            className="w-3/12 text-2xl rounded-full py-3 bg-blue-500"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSetup;
