const isEqualFiles = (file1, file2) => {
  if (file1.name && file1.type && file1.size && file1.lastModified) {
    if (file2.name && file2.type && file2.size && file2.lastModified) {
      if (
        file1.name === file2.name &&
        file1.size === file2.size &&
        file1.type === file2.type &&
        file1.lastModified === file2.lastModified
      ) {
        return true
      }
    }
  }
  return false
}
export default isEqualFiles