function generateMessage() {
    const part1 = ["The quick brown fox", "A wise old owl", "The lazy dog"];
    const part2 = ["jumps over", "sits on", "runs around"];
    const part3 = ["the lazy dog.", "the moon.", "the hill."];

    const randomPart1 = part1[Math.floor(Math.random() * part1.length)];
    const randomPart2 = part2[Math.floor(Math.random() * part2.length)];
    const randomPart3 = part3[Math.floor(Math.random() * part3.length)];

    const message = `${randomPart1} ${randomPart2} ${randomPart3}`;
    document.getElementById('messageDisplay').innerText = message;
}