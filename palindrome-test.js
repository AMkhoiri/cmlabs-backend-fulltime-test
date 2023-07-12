const isPalindrome = param => {
	const string = param.toLowerCase().replace(/\s/g, "")
	const reservedString = string.split("").reverse().join("")
	const result = string === reservedString
	console.log(result)
}

isPalindrome("SAIPPUAKIVIKAUPPIAS")
isPalindrome("Aibohphobia")
isPalindrome("Anna")
isPalindrome("Civic")

isPalindrome("My gym")
isPalindrome("No lemon, no melon")

isPalindrome("Good Morning")


