import supabase, { supabaseUrl } from "./supaabse";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // https://vfwzmmooxyjpqhpyfrvg.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg

  // 1. create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload image
  const { error: storateError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. delete the cabin if there was an error while uploading
  if (storateError) {
    await supabase.from("cabins").delete.eq("id", data.id);
    console.error("error", storateError);
    throw new Error(
      "Cabin image could not be uploaded and cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
