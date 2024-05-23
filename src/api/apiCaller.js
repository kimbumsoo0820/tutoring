import supabase from "./supabase/supabaseClient";

const getUserData = async () => {
  const { data, error } = await supabase.from("MY_PROJECT").select();
  if (error) {
    window.alert("에러 발생", error);
  } else {
    console.log("apiCall userData :", data);
    return data || null;
  }
};

const setUserData = async (params) => {
  const { data, error } = await supabase.from("MY_PROJECT").insert(params);
  if (error) {
    window.alert("에러 발생", error);
    return Boolean(false);
  } else {
    console.log("apiCall userData :", data);
    return Boolean(true);
  }
};
const apiCaller = {
  getUserData,
  setUserData,
};

export default apiCaller;
