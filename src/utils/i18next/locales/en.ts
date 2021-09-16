const en = {
  _validations: {
    mixed: {
      default: '${path} geçersiz',
      required: '${path} zorunludur.',
      oneOf: '${path} aşağıdaki değerlerden biri olmalıdır: ${value}',
      notOneOf: '${path} aşağıdaki değerlerden biri olmamalıdır: ${value}',
    },
    string: {
      length: '${path}, ${length} karakter uzunluğunda olmalı!',
      min: '${path} değeri en az ${min} değerinde olmalıdır.',
      max: '${path} değeri ${max} değerinden büyük olmamalıdır.',
      matches: '${path} aşağıdakilerle eşleşmelidir: "${regex}"',
      email: '${path} doğru bir e-posta olmalıdır.',
      url: '${path} geçerli bir URL olmalıdır.',
      trim: '${path} başında ve sonunda boşluk içermemeli!',
      lowercase: '${path} sadece küçük harflerden oluşmalı!',
      uppercase: '${path} sadece büyük harflerden oluşmalı!',
    },
    number: {
      min: '${path}, ${min} değerinden büyük veya ona eşit olmalıdır',
      max: '${path}, ${max} değerinden küçük veya ona eşit olmalıdır',
      lessThan: '${path}, ${kess} değerinden az olmalıdır',
      moreThan: '${path}, ${more} değerinden büyük olmalıdır',
      notEqual: '${path}, ${notEqual} değerine eşit olmamalıdır',
      positive: '${path} pozitif bir sayı olmalı',
      negative: '${path} negatif bir sayı olmalı',
      integer: '${path} rakam olmalıdır.',
    },
    date: {
      min: '${path} alanı ${min} değerinden sonra olmalıdır.',
      max: '${path} alanı ${max} değerinden daha erken olmalıdırç',
    },
    object: { noUnknown: '${path} alanı nesne biçiminde belirtilmemiş anahtarlara sahip olamaz!' },
    array: {
      min: '${path} alanı en az ${min} değere sahip olmalıdır',
      max: '${path} alanı ${max} değere eşit veya daha az olmalıdır',
    },
  },
};

export { en };
