module.exports = function toReadable(number) {
    const NUMS1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const NUMS2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const NUMS3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number <= 10)
        return NUMS1[number];
    else if (number >= 10 && number < 20)
        return NUMS2[number % 10];
    else if (number >= 20 && number < 100)
        if (number % 10 === 0)
            return NUMS3[number / 10 - 2];
        else
            return NUMS3[Math.floor(number / 10) - 2] + ' ' + NUMS1[number % 10];
    else if (number >= 100 && number < 1000)
        if (number % 100 === 0)
            return NUMS1[Math.floor(number / 100)] + ' hundred';
        else if (Math.floor(number / 10) % 10 === 0)
            return NUMS1[Math.floor(number / 100)] + ' hundred ' + NUMS1[Math.floor(number % 10)];
        else if (Math.floor(number / 10) % 10 === 1)
            return NUMS1[Math.floor(number / 100)] + ' hundred ' + NUMS2[Math.floor(number % 10)];
        else
            if (number % 10 === 0)
                return NUMS1[Math.floor(number / 100)] + ' hundred ' + NUMS3[Math.floor(number / 10) % 10 - 2];
            else
                return NUMS1[Math.floor(number / 100)] + ' hundred ' + NUMS3[Math.floor(number / 10) % 10 - 2] + ' ' + NUMS1[Math.floor(number % 10)];
}

console.log(module.exports(624));