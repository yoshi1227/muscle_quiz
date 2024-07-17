'use strict';

//合計問題数
let $questionTotalNum = 10;

/* -----------------------------------------------
筋トレ_ボディビルダー編　　クイズ
-------------------------------------------------- */
const prefecturalCapital = [
    {
        id: "1",
        question: "元ボディビルダーという経歴を持つ、「コマンドー」などの映画に主演した筋肉自慢の俳優は誰？",
        answer01: "アーノルド・シュワルツェネッガー",
        answer02: "シルベスター・スタローン",
        answer03: "ヴァーノン・ウェルズ",
        answer04: "レオナルド・ディカプリオ",
    },
    {
        id: "2",
        question: "日本人初のMr.Olympia出場者のボディビルダーは誰？",
        answer01: "山岸秀匡",
        answer02: "横川尚隆",
        answer03: "鈴木雅",
        answer04: "中山翔二",
    },
    {
        id: "3",
        question: "ボディビル界のゴールデンボーイと言われた、2010年から2018年まで日本1に輝いたボディビルダーは誰？",
        answer01: "鈴木雅",
        answer02: "あばれる君",
        answer03: "横川尚隆",
        answer04: "なかやまきんに君",
    },
    {
        id: "4",
        question: "Mr.Olympiaで7連覇をしたボディビルダーは誰？",
        answer01: "フィル・ヒース",
        answer02: "ショーンローデン",
        answer03: "ブランドン・カリー",
        answer04: "横川尚隆",
    },
    {
        id: "5",
        question: "男性のボディビルの種目で正しくないものはどれ？",
        answer01: "メンズパフォーマンス",
        answer02: "ボディビル",
        answer03: "メンズフィジーク",
        answer04: "クラシックフィジーク",
    },
    {
        id: "6",
        question: "女性のボディビルの種目で正しくないものはどれ？",
        answer01: "ボディビル",
        answer02: "ビキニフィットネス",
        answer03: "ボディフィットネス",
        answer04: "女子フィジーク",
    },
    {
        id: "7",
        question: "メンズフィジークの説明として正しくないものはどれ？",
        answer01: "筋肉の大きさを競う",
        answer02: "バランスの取れた筋肉やシルエットを競う",
        answer03: "ボードショーツ(短パン)を履く",
        answer04: "手首や足首などに装飾品を身に着けない",
    },
    {
        id: "8",
        question: "日本のボディビルの競技人口は何人？",
        answer01: "6000人以上",
        answer02: "4000人程度",
        answer03: "1000程度",
        answer04: "500以下",
    },
    {
        id: "9",
        question: "ボディビル大会での審査基準として正しくないものは？",
        answer01: "体重",
        answer02: "全体の発達度",
        answer03: "筋肉の発達度",
        answer04: "色・肌の美しさ",
    },
    {
        id: "10",
        question: "ボディビルの世界大会で最も権威のある大会は？",
        answer01: "Mr. Olympia",
        answer02: "NPC Universe",
        answer03: "JBBF",
        answer04: "レモンクラシック",
    },
    {
        id: "11",
        question: "ボディビル大会での掛け声の意味として正しくないのはどれ？",
        answer01: "選手への批判",
        answer02: "選手への応援",
        answer03: "審査員のアピール",
        answer04: "観客を楽しむ・盛り上げる",
    },
    {
        id: "12",
        question: "「筋肉が切れている」この掛け声の意味はどれ？",
        answer01: "筋肉が絞れている",
        answer02: "筋肉が破裂している",
        answer03: "筋肉が分厚い",
        answer04: "筋肉が光っている",
    },
    {
        id: "13",
        question: "「筋肉がデカい」この掛け声の意味はどれ？",
        answer01: "筋肉が大きい",
        answer02: "筋肉が小さい",
        answer03: "筋肉が絞れている",
        answer04: "筋肉が硬い",
    },
    {
        id: "14",
        question: "「プロテインにイースト菌混ざってんのかい！」どこを褒めている？",
        answer01: "筋肉の大きさ",
        answer02: "筋肉の日焼け度",
        answer03: "イースト菌のような筋肉",
        answer04: "筋肉の美しさ",
    },
    {
        id: "15",
        question: "「しぐれ煮」この掛け声が表す部位はどれ？",
        answer01: "日焼けした身体",
        answer02: "上腕二頭筋",
        answer03: "ハムストリングス",
        answer04: "顔",
    },
    {
        id: "16",
        question: "「二頭がデカい!ダチョウの卵!」この掛け声はどこの筋肉を示している？",
        answer01: "上腕二頭筋",
        answer02: "肩",
        answer03: "ハムストリングス",
        answer04: "大胸筋",
    },
    {
        id: "17",
        question: "サイドチェストは主にどこを見せるポーズ？",
        answer01: "胸の厚み",
        answer02: "腕の太さ",
        answer03: "背中の広がり",
        answer04: "腹筋",
    },
    {
        id: "18",
        question: "お願いマッスルの歌詞「肩にちっちゃい◯◯のせてんのかい！」◯には何が入る？",
        answer01: "重機",
        answer02: "岩石",
        answer03: "建物",
        answer04: "地球",
    },
    {
        id: "19",
        question: "お願いマッスルの歌詞「泣く子も黙る○○○！」◯には何が入る？",
        answer01: "大腿筋",
        answer02: "大胸筋",
        answer03: "広背筋",
        answer04: "三角筋",
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
let quizId = ["01", "02", "03", "04", "05" , "06" , "07" , "08" , "09" , "10","11","12","13","14","15","16","17","18","19"];
shuffleQuiz(quizId);

//現在の質問数
let $currentNum = 0;

//得点
let $pointPerCorrect = 10;


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
