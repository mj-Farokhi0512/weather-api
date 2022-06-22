export function NumberConvertor(inputNumber) {
  let output = "";

  const inputArr = String(inputNumber).split("");
  const persianNum = "٠١٢٣٤٥٦٧٨٩";
  const convertor = persianNum.split("");

  inputArr.forEach((item) => {
    switch (item) {
      case "0":
        output += convertor[0];
        break;
      case "1":
        output += convertor[1];
        break;
      case "2":
        output += convertor[2];
        break;
      case "3":
        output += convertor[3];
        break;
      case "4":
        output += convertor[4];
        break;
      case "5":
        output += convertor[5];
        break;
      case "6":
        output += convertor[6];
        break;
      case "7":
        output += convertor[7];
        break;
      case "8":
        output += convertor[8];
        break;
      case "9":
        output += convertor[9];
        break;
      default:
        output += item;
    }
  });

  return output;
}

export function ConditionConvert(text) {
  switch (text) {
    case "Sunny":
      return "آفتابی";
    case "Clear":
      return "صاف";
    case "Partly cloudy":
      return "نیمه ابری";
    case "Cloudy":
      return "ابری";
    case "Overcast":
      return "ابری";
    case "Mist":
      return "غبار";
    case "Patchy rain possible":
      return "احتمال بارندگی لکه دار";
    case "Patchy snow possible":
      return "احتمال برف";
    case "Patchy sleet possible":
      return "احتمال بارش تگرگ";
    case "Patchy freezing drizzle possible":
      return "یخبندان";
    case "Thundery outbreaks possible":
      return "احتمال رعدوبرق";
    case "Blowing snow":
      return "وزش برف";
    case "Blizzard":
      return "کولاک";
    case "Fog":
      return "مه";
    case "Freezing fog":
      return "مه یخ زده";
    case "Patchy light drizzle":
      return "بارش کم";
    case "Light drizzle":
      return "بارش کم";
    case "Freezing drizzle":
      return "تگرگ";
    case "Heavy freezing drizzle":
      return "یخبندان شدید";
    case "Patchy light rain":
      return "باران ملایم";
    case "Light rain":
      return "باران ملایم";
    case "Moderate rain at times":
      return "باران";
    case "Moderate rain":
      return "باران";
    case "Heavy rain at times":
      return "باران شدید";
    case "Heavy rain":
      return "باران شدید";
    case "Light freezing rain":
      return "تگرگ";
    case "Moderate or heavy freezing rain":
      return "تگرگ";
    case "Light sleet":
      return "برف سبک";
    case "Moderate or heavy sleet":
      return "برف";
    case "Patchy light snow":
      return "برف سبک";
    case "Light snow":
      return "برف سبک";
    case "Patchy moderate snow":
      return "برف";
    case "Moderate snow":
      return "برف";
    case "Patchy heavy snow":
      return "برف سنگین";
    case "Heavy snow":
      return "برف سنگین";
    case "Ice pellets":
      return "تگرگ";
    case "Light rain shower":
      return "باران سبک";
    case "Moderate or heavy rain shower":
      return "باران";
    case "Torrential rain shower":
      return "باران شدید";
    case "Light sleet showers":
      return "باران سبک";
    case "Moderate or heavy sleet showers":
      return "باران";
    case "Light snow showers":
      return "برف سبک";
    case "Moderate or heavy snow showers":
      return "برف";
    case "Light showers of ice pellets":
      return "تگرگ";
    case "Moderate or heavy showers of ice pellets":
      return "تگرگ شدید";
    case "Patchy light rain with thunder":
      return "باران و رعدوبرق";
    case "Moderate or heavy rain with thunder":
      return "باران و رعدوبرق";
    case "Patchy light snow with thunder":
      return "برف و رعدوبرق";
    case "Moderate or heavy snow with thunder":
      return "برف و رعدوبرق";
    default:
      return text;
  }
}
