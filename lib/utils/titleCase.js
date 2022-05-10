export default function titleCase(str) {
  const lowerCase = str?.toLowerCase()
 return lowerCase.replace(/\w\S*/g, x => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase());
}