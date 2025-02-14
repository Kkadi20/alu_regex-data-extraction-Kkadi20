// Regex patterns for each data type
const regexPatterns = {
    email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, 
    url: /https?:\/\/[^\s/$.?#].[^\s]*/g, // URLs
    phone: /(\(\d{3}\)\s?\d{3}-\d{4})|(\d{3}[-.]\d{3}[-.]\d{4})/g, 
    creditCard: /\b(?:\d{4}[ -]?){3}\d{4}\b/g, 
    time24hr: /\b([01]?[0-9]|2[0-3]):[0-5][0-9]\b/g, 
    time12hr: /\b([1-9]|1[0-2]):([0-5][0-9])\s?(AM|PM)\b/g, 
    htmlTags: /<\/?[\w\s="/.':;#-\/\?]+>/gi, 
    hashtag: /#\w+/g,
    currency: /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g 
};

// Sample text to test regex
const testData = `
    Emails: user@example.com, test.email@company.co.uk, wrong@com
    Websites: https://www.example.com, http://subdomain.example.org/page
    Phones: (123) 456-7890, 123-456-7890, 123.456.7890
    Credit Cards: 1234 5678 9012 3456, 1234-5678-9012-3456
    Time 24-hour: 14:30, 23:59
    Time 12-hour: 2:30 PM, 12:15 AM
    HTML Tags: <p>Welcome</p>, <div class="example"></div>, <img src="image.jpg" alt="description">
    Hashtags: #example, #ThisIsAHashtag
    Currency: $19.99, €1,234.56, £10.00
`;

// Function to extract and print matches
function extractMatches(pattern, text) {
    return text.match(pattern) || ["No match found"];
}

// Run tests and print results
console.log("Extracted Emails:", extractMatches(regexPatterns.email, testData));
console.log("Extracted URLs:", extractMatches(regexPatterns.url, testData));
console.log("Extracted Phone Numbers:", extractMatches(regexPatterns.phone, testData));
console.log("Extracted Credit Card Numbers:", extractMatches(regexPatterns.creditCard, testData));
console.log("Extracted Time (24-hour):", extractMatches(regexPatterns.time24hr, testData));
console.log("Extracted Time (12-hour):", extractMatches(regexPatterns.time12hr, testData));
console.log("Extracted HTML Tags:", extractMatches(regexPatterns.htmlTags, testData));
console.log("Extracted Hashtags:", extractMatches(regexPatterns.hashtag, testData));
console.log("Extracted Currency Amounts:", extractMatches(regexPatterns.currency, testData));
