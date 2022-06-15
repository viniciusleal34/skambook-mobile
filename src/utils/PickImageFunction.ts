import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export async function pickImage() {
  const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

  if (status !== "granted") {
    return "Not accept";
  }
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      return result;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function takeAPicture() {
  try {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      return false;
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
