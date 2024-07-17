(function ($) {
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

    //質問をランダムにする
    function shuffleQuiz(array) {
        for (let i = (array.length - 1); 0 < i; i--) {
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

    let questionObject = (function () {
        let Obj = function ($target) {

            //質問の番号
            this.$questionNumber = $target.find('.quiz-question-number');

            //質問文
            this.$questionName = $target.find('.quiz-question');

            //選択肢ボタン
            this.$questionButton = $target.find('.quiz-button');
            this.$button01 = $target.find('.button01');
            this.$button02 = $target.find('.button02');
            this.$button03 = $target.find('.button03');
            this.$button04 = $target.find('.button04');

            //選択肢のテキスト
            this.$answer01 = $target.find('.quiz-text01');
            this.$answer02 = $target.find('.quiz-text02');
            this.$answer03 = $target.find('.quiz-text03');
            this.$answer04 = $target.find('.quiz-text04');

            //score
            this.$score = $target.find('.score-wrap .score');

            this.init();
        };
        Obj.prototype = {
            //初回設定
            init: function () {
                //イベント登録
                this.event();
            },
            event: function () {
                let _this = this;
                let score = 0;

                //ウインドウ読み込み時
                $(window).on('load', function () {
                    //value取得
                    let value = quizId[$currentNum]; //最初は0（1番目）
                    //次の質問を取得
                    let nextQuestion = _this.searchQuestion(value);
                    //次の質問に切り替える
                    _this.changeQuestion(nextQuestion);
                    //回答のシャッフル
                    _this.shuffleAnswer($('.quiz-answer'));
                });

                //button クリック
                this.$questionButton.on("click", function () {

                    if ($(this).hasClass('button01')) {
                        $(this).parents('.quiz-answer').addClass('is-correct');
                        score = score + $pointPerCorrect;
                    } else {
                        $(this).parents('.quiz-answer').addClass('is-incorrect');
                    }

                    $(this).addClass('is-checked');

                    if ($currentNum + 1 == $questionTotalNum) {
                        setTimeout(function () {
                            $('.finish').addClass('is-show');
                            $('.score-wrap .score').text(score);
                        }, 1000);
                    } else {
                        setTimeout(function () {
                            //現在の数字の更新
                            $currentNum = $currentNum + 1;

                            //次の質問番号を取得
                            let value = quizId[$currentNum];

                            //次の質問を取得
                            let nextQuestion = _this.searchQuestion(value);

                            //次の質問に切り替える
                            _this.changeQuestion(nextQuestion);

                            //クラスを取る
                            _this.$questionButton.removeClass('is-checked');
                            $('.quiz-answer').removeClass('is-correct').removeClass('is-incorrect');

                            //回答のシャッフル
                            _this.shuffleAnswer($('.quiz-answer'));

                        }, 1000);
                    }
                    return false;
                });
            },
            searchQuestion: function (questionId) {
                let nextQuestion = null;
                prefecturalCapital.forEach(function (item) {
                    if (item.id == questionId) {
                        nextQuestion = item;
                    }
                });
                return nextQuestion;
            },
            changeQuestion: function (nextQuestion) {
                let _this = this;

                //質問文の入れ替え
                _this.$questionName.text(nextQuestion.question);

                //質問番号を1つ増やす
                let numPlusOne = $currentNum + 1;
                _this.$questionNumber.text('質問' + numPlusOne);

                //選択肢のテキストの入れ替え
                _this.$answer01.text(nextQuestion.answer01);
                _this.$answer02.text(nextQuestion.answer02);
                _this.$answer03.text(nextQuestion.answer03);
                _this.$answer04.text(nextQuestion.answer04);
            },
            shuffleAnswer: function (container) {
                let content = container.find("> *");
                let total = content.length;
                content.each(function () {
                    content.eq(Math.floor(Math.random() * total)).prependTo(container);
                });
            },
        };
        return Obj;
    })();

    let quiz = $('.quiz');
    if (quiz[0]) {
        let queInstance = new questionObject(quiz);
    }

})(jQuery);