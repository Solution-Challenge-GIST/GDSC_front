import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { addImageButtonStyles } from './styles';
import * as ImagePicker from 'expo-image-picker';
import { boxBorderRadious } from '../../style/share';

export default function AddImageButton() {
  const [pickedImagePath, setPickedImagePath] = useState('');

  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={showImagePicker}>
      <View style={addImageButtonStyles.container}>
        {pickedImagePath === '' ? (
          <>
            <Image
              style={addImageButtonStyles.plus}
              source={require('./images/redPlusButton.png')}
            />

            <Text style={addImageButtonStyles.font}>
              Pick Image from gallery
            </Text>
          </>
        ) : (
          <Image
            style={addImageButtonStyles.image}
            source={{ uri: pickedImagePath }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
