'use strict';

// 合計問題数
let questionTotalNum = 10;

/* -----------------------------------------------
筋トレ_トレーニング編　　クイズ
-------------------------------------------------- */
const prefecturalCapital = [
    {
        id: "01",
        question: "自重トレーニングのデメリットは何か？",
        answer01: "重量(負荷)の増減が難しい",
        answer02: "器具が必要になること",
        answer03: "自宅で手軽に実施できない",
        answer04: "ジムに行かないと実施できない",
    },
    {
        id: "02",
        question: "BIG3とは、デッドリフト、ベンチプレス、後一つは何か？",
        answer01: "スクワット",
        answer02: "懸垂",
        answer03: "ダンベルプレス",
        answer04: "プッシュアップ",
    },
    {
        id: "03",
        question: "スクワットで鍛えられる部位はどこ？",
        answer01: "太もも",
        answer02: "腕",
        answer03: "首",
        answer04: "背中",
    },
    {
        id: "04",
        question: "バーベルスクワットをする上での注意点はどれ？",
        answer01: "お尻を後方に引いて膝を前に出しすぎないこと",
        answer02: "お尻を後方に引いて膝を前に出すこと",
        answer03: "お尻を足首よりも前に出すこと",
        answer04: "特に注意することはない",
    },
    {
        id: "05",
        question: "チューブなどを使って、筋肉に負担をかける運動を繰り返すトレーニングの名前は？",
        answer01: "レジスタンス運動",
        answer02: "ラウンドアバウト運動",
        answer03: "リカレント運動",
        answer04: "リバース運動",
    },
    {
        id: "06",
        question: "英語で「push-up」という筋トレの1つはどれ？",
        answer01: "腕立て伏せ",
        answer02: "懸垂",
        answer03: "ベンチプレス",
        answer04: "柔軟体操",
    },
    {
        id: "07",
        question: "トーソローテーションで鍛えられる筋肉はどこ？",
        answer01: "腹",
        answer02: "お尻",
        answer03: "背中",
        answer04: "脚",
    },
    {
        id: "08",
        question: "ストレッチを行うタイミングはいつ？",
        answer01: "筋トレ前",
        answer02: "筋トレ後",
        answer03: "筋トレ後の1時間後",
        answer04: "筋トレの途中",
    },
    {
        id: "09",
        question: "オールアウトの効果として当てはまらないものはどれ？",
        answer01: "怪我しにくくする",
        answer02: "筋肉痛が激しい",
        answer03: "筋肉量を増やす",
        answer04: "達成感を与える",
    },
    {
        id: "10",
        question: "筋肥大を目的とした場合、筋トレの頻度として適切なのはどれ？",
        answer01: "週に3~5回行う",
        answer02: "週に3~4回行う",
        answer03: "週に2~3回定期的に行う",
        answer04: "休息日なしで毎日行う",
    },
    {
        id: "11",
        question: "筋肥大に効果的な回数は？",
        answer01: "8~12回",
        answer02: "10回を3セット",
        answer03: "その日の気分",
        answer04: "20回を1セット",
    },
];

// 質問をランダムにする
function shuffleQuiz(array) {
    for (let i = (array.length - 1); i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let selected = array[i];
        array[i] = array[random];
        array[random] = selected;
    }
    return array;
}
let quizId = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
shuffleQuiz(quizId);

// 現在の質問数
let currentNum = 0;

// 得点
let pointPerCorrect = 10;

// クイズオブジェクト
function QuestionObject(target) {
    // 質問の番号
    this.questionNumber = target.querySelector('.quiz-question-number');

    // 質問文
    this.questionName = target.querySelector('.quiz-question');

    // 選択肢ボタン
    this.questionButton = target.querySelectorAll('.quiz-button');
    this.button01 = target.querySelector('.button01');
    this.button02 = target.querySelector('.button02');
    this.button03 = target.querySelector('.button03');
    this.button04 = target.querySelector('.button04');

    // 選択肢のテキスト
    this.answer01 = target.querySelector('.quiz-text01');
    this.answer02 = target.querySelector('.quiz-text02');
    this.answer03 = target.querySelector('.quiz-text03');
    this.answer04 = target.querySelector('.quiz-text04');

    // スコア
    this.score = target.querySelector('.score-wrap .score');

    this.init();
}

QuestionObject.prototype.init = function () {
    let _this = this;
    let score = 0;  
    
    // ウインドウ読み込み時
    window.addEventListener('load', function () {
        // 値を取得
        let value = quizId[currentNum]; // 最初は0（1番目）
        // 次の質問を取得
        let nextQuestion = _this.searchQuestion(value);
        // 次の質問に切り替える
        _this.changeQuestion(nextQuestion);
        // 回答のシャッフル
        _this.shuffleAnswer(document.querySelector('.quiz-answer'));
    });

    // ボタンクリック
    this.questionButton.forEach(function (button) {
        button.addEventListener("click", function () {
            let currentQuestionNum = currentNum;
            if (button.classList.contains('button01')) {
                button.closest('.quiz-answer').classList.add('is-correct');
                document.getElementById("correct").play();
                score = score + pointPerCorrect;
            } else {
                button.closest('.quiz-answer').classList.add('is-incorrect');
                document.getElementById("incorrect").play();
            }

            button.classList.add('is-checked');

            if (currentNum + 1 === questionTotalNum) {
                setTimeout(function () {
                    document.querySelector('.finish').classList.add('is-show');
                    document.querySelector('.score-wrap .score').textContent = score;
                }, 1000);
            } else {
                setTimeout(function () {
                    // 現在の数字の更新
                    currentNum = currentQuestionNum + 1;

                    // 次の質問番号を取得
                    let value = quizId[currentNum];

                    // 次の質問を取得
                    let nextQuestion = _this.searchQuestion(value);

                    // 次の質問に切り替える
                    _this.changeQuestion(nextQuestion);

                    document.getElementById("question-audio").play(); //出題音

                    // クラスを取る
                    _this.questionButton.forEach(function (btn) {
                        btn.classList.remove('is-checked');
                    });
                    document.querySelectorAll('.quiz-answer').forEach(function (ans) {
                        ans.classList.remove('is-correct', 'is-incorrect');
                    });

                    // 回答のシャッフル
                    _this.shuffleAnswer(document.querySelector('.quiz-answer'));

                }, 1000);
            }
            return false;
        });
    });
}

QuestionObject.prototype.searchQuestion = function (questionId) {
    let nextQuestion = null;
    prefecturalCapital.forEach(function (item) {
        if (item.id === questionId) {
            nextQuestion = item;
        }
    });
    return nextQuestion;
};

QuestionObject.prototype.changeQuestion = function (nextQuestion) {
    // 質問文の入れ替え
    this.questionName.textContent = nextQuestion.question;

    // 質問番号を1つ増やす
    let numPlusOne = currentNum + 1;
    this.questionNumber.textContent = '質問' + numPlusOne;

    // 選択肢のテキストの入れ替え
    this.answer01.textContent = nextQuestion.answer01;
    this.answer02.textContent = nextQuestion.answer02;
    this.answer03.textContent = nextQuestion.answer03;
    this.answer04.textContent = nextQuestion.answer04;
};

QuestionObject.prototype.shuffleAnswer = function (container) {
    let content = container.children;
    let total = content.length;
    Array.from(content).forEach(function (item) {
        container.insertBefore(item, content[Math.floor(Math.random() * total)]);
    });
};

// クイズ要素の取得
let quiz = document.querySelector('.quiz');
if (quiz) {
    let queInstance = new QuestionObject(quiz);
}

