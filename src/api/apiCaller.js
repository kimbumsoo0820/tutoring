import supabase from "./supabase/supabaseClient";

const UserData = async () => {
  const { data, error } = await supabase.from("MY_PROJECT").select();
  if (error) {
    window.alert("에러 발생", error);
  } else {
    console.log("apiCall userData :", data);
    return data || null;
  }
};

export { UserData };
