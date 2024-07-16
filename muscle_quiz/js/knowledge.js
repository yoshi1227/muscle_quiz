(function ($) {
    'use strict';

    //合計問題数
    let $questionTotalNum = 10;

    /* -----------------------------------------------
    筋トレ_知識編　　クイズ
    -------------------------------------------------- */
    const prefecturalCapital = [
        {
            id: "01",
            question: "スクワットの別名は？",
            answer01: "ディープ・二ー・ベント",
            answer02: "アップ・ダウン",
            answer03: "キープ・ダウン・ポジション",
            answer04: "ストロング・フォー・ロウワー",
        },
        {
            id: "02",
            question: "次のうち、人間のふくらはぎにある筋肉はどっち？",
            answer01: "ヒラメ筋",
            answer02: "マグロ筋",
            answer03: "カツオ筋",
            answer04: "カジキ筋",
        },
        {
            id: "03",
            question: "筋肉と骨をつなぐものはどれか？",
            answer01: "腱",
            answer02: "靭帯",
            answer03: "軟骨",
            answer04: "皮膚",
        },
        {
            id: "04",
            question: "上腕二頭筋の作用はどれ？",
            answer01: "肘を曲げる",
            answer02: "手首を伸ばす",
            answer03: "肘を伸ばす",
            answer04: "手首を曲げる",
        },
        {
            id: "05",
            question: "陸上競技の内、「白筋」の割合が多いのはどれ？",
            answer01: "短距離走",
            answer02: "マラソン",
            answer03: "トライアスロン",
            answer04: "長距離走",
        },
        {
            id: "06",
            question: "人体で最も短い筋肉はどれ？",
            answer01: "あぶみ骨筋",
            answer02: "ヒラメ筋",
            answer03: "僧帽筋",
            answer04: "上腕三頭筋",
        },
        {
            id: "07",
            question: "あぶみ骨筋があるのはどこ？",
            answer01: "耳",
            answer02: "鼻",
            answer03: "眼",
            answer04: "口",
        },
        {
            id: "08",
            question: "ホエイプロテインの特徴はどれ？",
            answer01: "吸収が速やか",
            answer02: "吸収が穏やか",
            answer03: "水に溶けやすい",
            answer04: "大豆由来のタンパク質を含む",
        },
        {
            id: "09",
            question: "ソイプロテインの特徴はどれ？",
            answer01: "大豆由来のタンパク質を含む",
            answer02: "牛乳のタンパク質から抽出されたもの",
            answer03: "水に溶けやすい",
            answer04: "動物性のタンパク質をたくさん含む",
        },
        {
            id: "10",
            question: "プロテインの種類として含まれるのはどれ？",
            answer01: "カゼインプロテイン",
            answer02: "ザインプロテイン",
            answer03: "プルプロテイン",
            answer04: "エチノプロテイン",
        },
        // 問題の追加はここから
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
    let quizId = ["01", "02", "03", "04", "05" , "06" , "07" , "08" , "09" , "10"];
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