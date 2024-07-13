import rawData from './data/questions.test.json';
import readLinePromises from "readline/promises";
import chalk from "chalk";
import figlet from "figlet";

interface Question {
    word: string;
    hint: string;
}

const questions: Question[] = rawData;


class Quiz {
    questions: Question[];

    constructor(questions: Question[]) {
        this.questions = questions;
    }

    getNext(): Question {
        const idex = Math.floor(Math.random() * this.questions.length);
        return this.questions.splice(idex, 1)[0];
    }

    hasNext(): boolean {
        return this.questions.length > 0;
    }

    lefts(): number {
        return this.questions.length;
    }
}

const quiz = new Quiz(questions);


interface UserInterface {
    input(): Promise<string>;
    clear(): void;
    destroy(): void;
    output(message: string, color: Color): void;
    outputAnswer(message: string): void;
}

const rl = readLinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

const CLI: UserInterface = {
    async input() {
        const input = await rl.question("Enter a letter: ");
        return input.replaceAll(" ", "").toLowerCase();
    },
    clear() {
        console.clear();
    },
    destroy() {
        rl.close();
    },
    output(message: string, color: Color = "white") {
        console.log(chalk[color](message), "\n");
    },
    outputAnswer(message: string) {
        console.log(figlet.textSync(message, { font: "Big" }));
    }
}

async function testQuestion() {
    CLI.clear();
    const userInput = await CLI.input();
    console.log(userInput);
    CLI.destroy();
}

type Color = "red" | "green" | "yellow" | "white" 