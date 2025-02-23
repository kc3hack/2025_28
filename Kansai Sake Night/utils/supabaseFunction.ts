import { supabase } from "./supabase";

export const fetchSakeList = async () => {
  const { data, error } = await supabase.from("sake").select("*");

  if (error) {
    console.error("Supabase error:", error);
  } else {
    console.log("Fetched Sake List:");
  }

  return data;
};

export const fetchIzakayasList = async () => {
    const { data, error } = await supabase.from("izakayas").select("*");
  
    if (error) {
      console.error("Supabase error:", error);
    } else {
      console.log("Fetched Izakayas List");
    }
  
    return data;
  };