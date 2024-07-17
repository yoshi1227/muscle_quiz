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
        {
            id: "11",
            question: "ホエイプロテインは何という食材から精製される？",
            answer01: "牛乳",
            answer02: "鶏肉",
            answer03: "大豆",
            answer04: "ココナッツ",
        },
        {
            id: "12",
            question: "トレーニングにより筋繊維が損傷した際、休息を入れることで筋繊維が回復し、以前よりも強くなる現象を何という？",
            answer01: "超回復",
            answer02: "増回復",
            answer03: "反回復",
            answer04: "全回復",
        },
        {
            id: "13",
            question: "オールアウトとはどのような状態をいう？",
            answer01: "持っている力をすべて出しきった状態",
            answer02: "目の前が真っ暗になった状態",
            answer03: "心拍数が180以上になった状態",
            answer04: "呼吸困難になった状態",
        },
        {
            id: "14",
            question: "体の中で一番大きな筋肉はどれ？",
            answer01: "大腿四頭筋",
            answer02: "大臀筋",
            answer03: "腹直筋",
            answer04: "広背筋",
        },
        {
            id: "15",
            question: "筋トレで筋肥大しない理由はどれ？",
            answer01: "古い筋繊維から新しい筋繊維を生成するから",
            answer02: "筋繊維を損傷しているから",
            answer03: "超回復を行っているから",
            answer04: "筋肉にストレスを与えているから",
        },
        {
            id: "16",
            question: "筋肥大を誘発するストレスは物理的ストレスとあとどれか？",
            answer01: "化学的ストレス",
            answer02: "数学的ストレス",
            answer03: "電気的ストレス",
            answer04: "生物的ストレス",
        },
        {
            id: "17",
            question: "ストレスを与えることで得られないことはどれ？",
            answer01: "mTORの沈静化",
            answer02: "IGF-1の分泌",
            answer03: "筋サテライト細胞の増殖",
            answer04: "テストステロンや成長ホルモンの分泌",
        },
        {
            id: "18",
            question: "協働筋の説明はどれ？",
            answer01: "筋トレ動作に貢献するが関与が小さい筋肉",
            answer02: "筋トレ種目で全く関与しない筋肉",
            answer03: "筋トレ種目でメインターゲットになる筋肉",
            answer04: "メインに鍛える筋肉の近くにある筋肉",
        },
        {
            id: "19",
            question: "単関節種目とはどれ？",
            answer01: "一つの関節動作を行う",
            answer02: "複数の関節動作を行う",
            answer03: "スクワットやベンチプレスが含まれる",
            answer04: "複数の部位を同時に鍛えられる",
        },
        {
            id: "20",
            question: "複合筋に含まれる筋肉はどれ？",
            answer01: "腸腰筋",
            answer02: "大胸筋",
            answer03: "三角筋",
            answer04: "大殿筋",
        },
        {
            id: "21",
            question: "トレーニングでのオーバーロードの原則とはなにか？",
            answer01: "徐々に強度を上げる",
            answer02: "筋肉を休ませる",
            answer03: "毎日同じ運動をする",
            answer04: "低負荷高回数を維持する",
        },
        {
            id: "22",
            question: "オーバーロードの方法として正しくないのはどれか？",
            answer01: "インターバルを長くする",
            answer02: "レップ数(反復回数)を増やす",
            answer03: "セット数を増やす",
            answer04: "使用重量を上げる",
        },
        {
            id: "23",
            question: "プラトーとはなにか？",
            answer01: "トレーニングの効果がほとんど見られなくなる時期",
            answer02: "筋肉の成長速度が早くなる時期",
            answer03: "トレーニングの効果が目に見えて発揮される時期",
            answer04: "トレーニングが習慣化してきた時期",
        },
        {
            id: "24",
            question: "HIITとはなんの略か",
            answer01: "High Intensity Interval Training",
            answer02: "High Intensity Impact Training",
            answer03: "High Intensity Isolation Training",
            answer04: "High Intensity Integrated Training",
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
    let quizId = ["01", "02", "03", "04", "05" , "06" , "07" , "08" , "09" , "10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
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