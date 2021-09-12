import { Platform } from 'react-native';
import _ from 'lodash';

const imgRefactor = (image) => {
  const { uri, type } = Platform.select({
    ios: { uri: `file://${image.path}`, type: image.mime },
    android: { uri: image.path, type: image.mime },
  });
  const pathParts = image.path.split('/');
  return { uri, type, name: `${pathParts[pathParts.length - 1]}` };
};

const imageUploadNameReplace = (images) => {
  const isArray = _.isArray(images);

  if (!isArray) return imgRefactor(images);

  let res = [];

  images.forEach((r) => {
    const call = imgRefactor(r);
    res = [...res, call];
  });

  return res;
};

export { imageUploadNameReplace };
