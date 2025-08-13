

const exp = (function() {


    let p = {};

    const colorDraw = 0;
    const difficultyDraw = Math.floor(Math.random() * 2)

    let settings = {
        gameType: ['streak', 'bern'][Math.floor(Math.random() * 2)],
        difficulty: [['easy', 'hard'], ['hard', 'easy']][difficultyDraw],
        beforeAfter: [['after', 'before'], ['before', 'after']][difficultyDraw],
        targetLetter: [['i', 'g'], ['g', 'i']][difficultyDraw],
        moreOrLess: ['more', 'less'][difficultyDraw],
    };

    console.log(settings.difficulty, settings.gameType);

    jsPsych.data.addProperties({
        gameType: settings.gameType,
        difficulty_1: settings.difficulty[0],
        difficulty_2: settings.difficulty[1],
    });

   /*
    *
    *   FUNCS
    *
    */

   /*
    *
    *   INSTRUCTIONS
    *
    */

    p.consent = {
        type: jsPsychExternalHtml,
        url: "./html/consent.html",
        cont_btn: "advance",
    };

    const intro_1 = {
        type: jsPsychSurvey,
        pages: [
            [
                {
                    type: 'html',
                    prompt: `<p><strong>What makes some activities more immersive and engaging than others?</strong></p>
                    <p>We're interested in why people feel effortlessly engaged in some activities (such as engrossing video games), but struggle to focus on other activities.</p>
                    <p>To help us, you'll play two rounds of a game called the <b>Tile Game</b>. After each round, you'll report how immersed and engaged you felt.</p>
                    <p>To learn about and play the Tile Game, continue to the next screen.</p></p>`
                },
            ],

            [
                {
                    type: 'html',
                    prompt: `<p>The Tile Game takes place in a play area like this one:</p>
                    <div class="play-area-inst">
                    </div>`
                },
            ],

            [
                {
                    type: 'html',
                    prompt: `<p>In the center of the play area, tiles will appear one at a time. Each tile contains a letter.</p>
                    <div class="play-area-inst">
                    <div class="tile">h</div>
                    </div>`
                },
            ],

            [
                {
                    type: 'html',
                    prompt: `<p>Each tile will disappear after a second or two. <b>Your job is to activate each tile before it disappears!</b></p>
                    <div class="play-area-inst">
                    <div class="tile">h</div>
                    </div>`
                },
            ],

            [
                {
                    type: 'html',
                    prompt: `<p>To activate a tile, you must type the letter that comes <b>${settings.beforeAfter[0]}</b> the letter on the tile. For example, 
                    to activate the tile below, you'd need to type the ${settings.targetLetter[0]}-key on your keyboard.</p>
                    <div class="play-area-inst">
                    <div class="tile">h</div>
                    </div>`
                },
            ],

            [
                {
                    type: 'html',
                    prompt: `<p>If you press the correct key before time runs out, the tile will activate:</p>
                    <div class="play-area-inst">
                    <div class="tile-correct">h</div>
                    </div>`
                },
            ],

            [
                {
                    type: 'html',
                    prompt: `<p>If you're too slow or press the wrong key, the tile will disappear.</p>
                    <div class="play-area-inst">
                    </div>`
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `During the Tile Game, you'll be competing for a chance to win a <b>$100.00 bonus prize</b>.</p>
                    <p>Specifically, by activating tiles, you'll earn tokens. The tokens you earn will be entered into a lottery, and if one of your tokens is drawn, you'll win $100.00. To maximize your chances of winning a $100.00 bonus, you'll need to earn as many tokens as possible.</p>
                    <p>Continue to learn how to earn tokens!</p>`
                },
            ],
        ],
        button_label_finish: 'Next'
    };

    const howToEarn_bern = {
        type: jsPsychSurvey,
        pages: [
            [
                {
                    type: 'html',
                    prompt: `<p>In The Tile Game, players earn 10 tokens for tile they activate.</p>
                    <p>Players earn 0 tokens for every tile they fail to activate.</p>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>If you activate a tile, you'll see this message indicating that you earned 10 tokens.</p> 
                    <div class="play-area-inst">               
                        <div class="win-text-inst" style="color:green">+10 Tokens</div>
                    </div>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>If you fail to activate a tile, you'll see this message indicating that you earned 0 tokens.</p> 
                    <div class="play-area-inst">               
                        <div class="loss-text-inst">+0 Tokens</div>
                    </div>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>In addition to earning tokens through your performance, you can gain or lose tokens randomly.
                    Specifically, at the end of each round, you have a 20% chance of winning 5 extra tokens, and a 20% chance of losing 5 tokens.</p>`,

                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>If you see "+5 Bonus," this means you randomly won 5 extra tokens. For example, this is what you'd see if you randomly won 5 extra tokens after activating a tile:</p>
                    <div class="play-area-inst">               
                        <div class="win-text-inst" style="color:green">+10 Tokens</div>
                        <div class="plus-text-inst">+5 Bonus</div>
                    </div>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>This is what you'd see if you randomly won 5 extra tokens after failing to activate a tile.</p>
                    <div class="play-area-inst">               
                        <div class="loss-text-inst">+0 Tokens</div>
                        <div class="plus-text-inst">+5 Bonus</div>
                    </div>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>If you see "-5 Loss," this means you randomly lost 5 tokens. For example, this is what you'd see if you randomly lost 5 tokens after activating a tile:</p>
                    <div class="play-area-inst">               
                        <div class="win-text-inst" style="color:green">+10 Tokens</div>
                        <div class="minus-text-inst">-5 Loss</div>
                    </div>`
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>This is what you'd see if you randomly lost 5 tokens after failing to activate a tile:</p>
                    <div class="play-area-inst">               
                        <div class="loss-text-inst">+0 Tokens</div>
                        <div class="minus-text-inst">-5 Loss</div>
                    </div>`
                },
            ],
        ],
        button_label_finish: 'Next'
    };

    const howToEarn_streak = {
        type: jsPsychSurvey,
        pages: [
            [
                {
                    type: 'html',
                    prompt: `<p>In the Tile Game, players earn tokens for streaks of consecutive successes.</p>
                    <p>Specifically, you'll earn 10 tokens for every consecutive tile you activate.</p>
                    <p>For example, a streak of 2 is worth 20 tokens, a streak of 3 is worth 30 tokens, and so on.</p>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>Throughout the game, you'll see the length of your current streak at the top of the play area.
                    For example, if you activate 3 tiles in a row, you'll see the following:</p> 
                    <div class="play-area-inst">   
                        <div class="header-title" style="font-size:30px">Current Streak: 3</div>    
                    </div>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>Each time you fail to activate a tile, you'll see how many tokens you earned from your streak.</p> 
                    <div class="play-area-inst">   
                        <div class="header-title" style="font-size:30px">Current Streak: 3</div>  
                    </div>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>For example, if you break a streak of three, you'll see this message indicating that you earned 30 tokens.</p> 
                    <div class="play-area-inst">   
                        <div class="header-title" style="font-size:30px">Final Streak: 3</div>
                        <div class="win-text-inst" style="color:green">+30 Tokens</div>   
                    </div>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>If you fail to activate a tile without having started a streak, you'll see this message indicating that you earned 0 tokens.</p> 
                    <div class="play-area-inst">   
                        <div class="header-title" style="font-size:30px">Final Streak: 0</div>
                        <div class="loss-text-inst">+0 Tokens</div>   
                    </div>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>In addition to earning tokens through your performance, you'll sometimes gain (or lose) tokens randomly.
                    Specifically, at the end of each streak, you have a 20% chance of winning 5 extra tokens, and a 20% chance of losing 5 tokens.</p>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>If you see "+5 Bonus," this means you randomly won 5 extra tokens. For example, this is what you'd see if you randomly won 5 extra tokens after a streak of three:</p>
                    <div class="play-area-inst">   
                        <div class="win-text-inst" style="color:green">+30 Tokens</div>
                        <div class="plus-text-inst">+5 Bonus</div>
                    </div>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>This is what you'd see if you randomly won 5 extra tokens after a streak of zero:</p>
                    <div class="play-area-inst">   
                        <div class="loss-text-inst">+0 Tokens</div>
                        <div class="plus-text-inst">+5 Bonus</div>
                    </div>`
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>If you see "-5 Loss," this means you randomly lost 5 tokens. For example, this is what you'd see if you randomly lost 5 tokens after a streak of three:</p></p>
                    <div class="play-area-inst">   
                        <div class="win-text-inst" style="color:green">+30 Tokens</div>
                        <div class="minus-text-inst">-5 Loss</div>
                    </div>`,
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>This is what you'd see if you randomly lost 5 tokens after a streak of zero:</p></p>
                    <div class="play-area-inst">   
                        <div class="loss-text-inst">+0 Tokens</div>
                        <div class="minus-text-inst">-5 Loss</div>
                    </div>`,
                },
            ],
        ],
        button_label_finish: 'Next'
    };

    const intro_2 = {
        type: jsPsychSurvey,
        pages: [
            [
                {
                    type: 'html',
                    prompt: `<p>Round 1 of the Tile Game is now complete!</p>
                    <p>Soon, you'll continue earning tokens by playing Round 2 of the Tile Game.</p>`
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>Round 2 is identical to Round 1 with one exception: It is <b>${settings.moreOrLess} challenging</b></p>
                    <p>Specifically, to activate each tile, you'll need to type the letter that comes <b>${settings.beforeAfter[1]}</b> the letter on the tile.</p>`
                },
            ],
            [
                {
                    type: 'html',
                    prompt: `<p>For example, to activate a tile below, you'd need to type the ${settings.targetLetter[1]}-key on your keyboard.</p>
                    <div class="play-area-inst">
                    <div class="tile">h</div>
                    </div>`
                },
            ],
        ],
        button_label_finish: 'Next',        
    }

    function MakeAttnChk1(settings) {


        let q2 = (settings.gameType == "streak") ? `How many tokens would you earn for a streak of 3?` : `How many tokens do you earn for activating a tile?`;
        let q3 = (settings.gameType == "streak") ? `How many tokens would you earn for a streak of 0?` : `How many tokens do you earn for failing to activating a tile?`;
        let q4 = (settings.gameType == "streak") ? `After each streak, players have a 20% chance of winning 5 extra tokens and a 20% chance of losing 5 tokens.` : `After each round, players have a 20% chance of winning 5 extra tokens and a 20% chance of losing 5 tokens.`;

        let a1 = (settings.difficulty[0] == "hard") ? `s` : `u`;
        let a2 = (settings.gameType == "streak") ? `30 tokens` : `10 tokens`;

        let correctAnswers = [a1, a2, `0 tokens`, `true`];

        let attnChk = {
            type: jsPsychSurveyMultiChoice,
            preamble: `<div class='parent' style='text-align: left; color: rgb(109, 112, 114)'>
                <p><strong>Please answer the following questions.</strong></p>
                </div>`,
            questions: [
                {
                    prompt: `<div style='color: rgb(109, 112, 114)'>What key must you press to activate a tile with a 't' on it?`, 
                    name: `attnChk1`, 
                    options: [`s`, `t`, `u`],
                },
                {
                    prompt: `<div style='color: rgb(109, 112, 114)'>${q2}</div>`, 
                    name: `attnChk2`, 
                    options: [`0 tokens`, `10 tokens`, `20 tokens`, `30 tokens`],
                },
                {
                    prompt: `<div style='color: rgb(109, 112, 114)'>${q3}</div>`, 
                    name: `attnChk3`, 
                    options: [`0 tokens`, `10 tokens`, `20 tokens`, `30 tokens`],
                },
                {
                    prompt: `<div style='color: rgb(109, 112, 114)'>${q4}</div>`, 
                    name: `attnChk4`, 
                    options: [`true`, `false`],
                },
            ],
            scale_width: 500,
            on_finish: (data) => {
                const totalErrors = dmPsych.getTotalErrors(data, correctAnswers);
                data.totalErrors = totalErrors;
            },
        };

        const errorMessage = {
            type: jsPsychSurvey,
            pages: [
                [
                    {
                        type: 'html',
                        prompt: `<p>You provided the wrong answer.</p><p>Please continue to try again.</p>`
                    },
                ],
            ],
            button_label_finish: 'Next',
        };

        const conditionalNode = {
          timeline: [errorMessage],
          conditional_function: () => {
            const fail = jsPsych.data.get().last(1).select('totalErrors').sum() > 0 ? true : false;
            return fail;
          },
        };

        const inst = (settings.gameType == "streak") ? [intro_1, howToEarn_streak] : [intro_1, howToEarn_bern];

        const instLoop = {
          timeline: [...inst, attnChk, conditionalNode],
          loop_function: () => {
            const fail = jsPsych.data.get().last(2).select('totalErrors').sum() > 0 ? true : false;
            return fail;
          },
        };

        const readyToPlay = {
            type: jsPsychSurvey,
            pages: [
                [
                    {
                        type: 'html',
                        prompt: `<p>You're now ready to play Round 1 of the Tile Game!</p>
                        <p>Remember, to activate a tile, you must type the letter that comes <b>${settings.beforeAfter[0]}</b> the letter on the tile.</p>
                        <p>To begin, continue to the next screen.</p>`
                    },
                ],

            ],
            button_label_finish: 'Next',
        };

        this.timeline = [instLoop, readyToPlay];
    };

    function MakeAttnChk2(settings) {

        let a1 = (settings.difficulty[1] == "hard") ? `s` : `u`;

        let correctAnswers = [a1];

        let attnChk = {
            type: jsPsychSurveyMultiChoice,
            preamble: `<div class='parent' style='text-align: left; color: rgb(109, 112, 114)'>
                <p><strong>Please answer the following question.</strong></p>
                </div>`,
            questions: [
                {
                    prompt: `<div style='color: rgb(109, 112, 114)'>In Round 2, what key must you press to activate a tile with a 't' on it?`, 
                    name: `attnChk5`, 
                    options: [`s`, `t`, `u`],
                },
            ],
            scale_width: 500,
            on_finish: (data) => {
                const totalErrors = dmPsych.getTotalErrors(data, correctAnswers);
                data.totalErrors = totalErrors;
            },
        };

        const errorMessage = {
            type: jsPsychSurvey,
            pages: [
                [
                    {
                        type: 'html',
                        prompt: `<p>You provided the wrong answer.</p><p>Please continue to try again.</p>`,
                    },
                ],
            ],
            button_label_finish: 'Next',
        };

        const conditionalNode = {
          timeline: [errorMessage],
          conditional_function: () => {
            const fail = jsPsych.data.get().last(1).select('totalErrors').sum() > 0 ? true : false;
            return fail;
          },
        };

        const instLoop = {
          timeline: [intro_2, attnChk, conditionalNode],
          loop_function: () => {
            const fail = jsPsych.data.get().last(2).select('totalErrors').sum() > 0 ? true : false;
            return fail;
          },
        };

        const readyToPlay = {
            type: jsPsychSurvey,
            pages: [
                [
                    {
                        type: 'html',
                        prompt: `<p>You're now ready to play Round 2 of the Tile Game!</p>
                        <p>Remember, to activate a tile, you must type the letter that comes <b>${settings.beforeAfter[1]}</b> the letter on the tile.</p>
                        <p>To begin, continue to the next screen.</p>`
                    },
                ],

            ],
            button_label_finish: 'Next',
        };

        this.timeline = [instLoop, readyToPlay];
    };

    const attnChk1 = new MakeAttnChk1(settings);

    const attnChk2 = new MakeAttnChk2(settings);

    
   /*
    *
    *   TASK
    *
    */


    const MakeTileGame = function(round, gameType, isPractice, practiceType, colorNames, colorHex) {

        let correct, stim, stimIdx, targetIdx, bonusFeedbackType, bonusFeedback;
        let trial = 1;
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        let stimIdxArray = [];
        let latencyArray = [];
        for (let i = 1; i <= 24; i++) {
            if (i !== 11) {
                stimIdxArray.push(i);
                let latency = 30 * (i - 1) + 1700;
                latencyArray.push(latency);
            };
        };
        let stimIdxArray_1 = jsPsych.randomization.repeat(stimIdxArray, 1);
        let stimIdxArray_2 = jsPsych.randomization.repeat(stimIdxArray, 1);
        stimIdxArray = stimIdxArray_1.concat(stimIdxArray_2);

        let latencyArray_1 = jsPsych.randomization.repeat(latencyArray, 1);
        let latencyArray_2 = jsPsych.randomization.repeat(latencyArray, 1);
        latencyArray = latencyArray_1.concat(latencyArray_2);

        // variables for streak condition
        let streak = 0;
        let finalStreak;

        // html
        const headerViz = (gameType == 'bern' || isPractice) ? 'hidden' : 'visible';
        const playArea = '<div class="play-area">' + `<div class="header-title" style="visibility:${headerViz}">Current Streak:</div>` + `<div class="header-number" style="visibility:${headerViz}">{headerNumber}</div>` + '{tileContent}' + '</div>';
        const feedbackArea = `<div class="play-area"><div class="header-title" style="visibility:${headerViz}">Final Streak:</div><div class="header-number" style="visibility:${headerViz}">{headerNumber}</div>{token-text}{extra-text}</div>`;
        const winText = '<div class="win-text">+10 Tokens</div>';
        const lossText = '<div class="loss-text">+0 Tokens</div>';
        const plusText = '<div class="plus-text">+5 Bonus</div>';
        const minusText = '<div class="minus-text">-5 Loss</div>';

        // make arrays of token outcomes 
        const makeTokenArray = function() {
            return jsPsych.randomization.repeat(['plus', 'minus', 'normal', 'normal', 'normal'], 1);
        };
        let tokenArray_win = makeTokenArray();
        let tokenArray_loss = makeTokenArray();


        const iti = {
            type:jsPsychHtmlKeyboardResponse,
            stimulus: () => {
                return playArea.replace('{headerNumber}', `${streak}`).replace('{tileContent}', '');
            },
            choices: "NO_KEYS",
            trial_duration: () => {
                let latency = Math.floor(Math.random() * 1500 + 250);
                return latency;
            },
            data: {phase: 'iti', round: round + 1},
            on_finish: (data) => {
                data.trial_idx = trial;
                data.practice = isPractice;
                stimIdx = stimIdxArray.pop();
                targetIdx = (settings.difficulty[round] == "easy") ? stimIdx + 1 : stimIdx - 1;
           },
        };

        const response = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: function() {
                stim = alphabet[stimIdx];
                const tileContent = `<div class="tile">${stim}</div>`
                return playArea.replace('{headerNumber}', `${streak}`).replace('{tileContent}', tileContent);
            },
            trial_duration: () => { 
                let latency = latencyArray.pop();
                let latency_adjustment = (settings.difficulty[round] == "easy") ? 1000 : 0;
                let latency_adjusted = latency + latency_adjustment;
                return latency_adjusted;
            },
            data: {phase: 'response', round: round + 1},
            on_finish: (data) => {
                correct = (data.response == alphabet[targetIdx]) ? 1 : 0;
                data.trial_idx = trial;
                data.practice = isPractice;
                data.correct = correct;
            },
        };

        const outcome = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: function() {
                let tileContent = (correct == 1) ? `<div class="tile-correct">${stim}</div>` : '';
                return playArea.replace('{headerNumber}', `${streak}`).replace('{tileContent}', tileContent);     
            },
            choices: "NO_KEYS",
            trial_duration: 1000,
            data: {phase: 'outcome', round: round + 1},
            on_finish: (data) => {
                if (correct == 1) {
                    streak++;
                } else {
                    finalStreak = streak;
                    streak = 0;
                };

                data.trial_idx = trial;
                data.practice = isPractice;
            },
        };

        const tokens = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: function() {
                let standardFeedback;
                if (correct == 1) {
                    standardFeedback = winText;
                    if (isPractice) {
                        standardFeedback = winText.replace('+10 Tokens', `You won!`)
                    } else if (gameType == 'streak' && stimIdxArray.length == 0) {
                        standardFeedback = winText.replace('10', `${10 * finalStreak}`)
                    };
                } else {
                    standardFeedback = lossText;
                    if (isPractice) {
                        standardFeedback = lossText.replace('+0 Tokens', `You lost!`)
                    } else if (gameType == "streak") {
                        standardFeedback = (finalStreak > 0) ? winText.replace('10', `${10 * finalStreak}`) : lossText;
                    };                    
                };

                if (!isPractice) {
                    bonusFeedbackType = (correct == 1) ? tokenArray_win.pop() : tokenArray_loss.pop();
                    bonusFeedback = (bonusFeedbackType == 'plus') ? plusText : (bonusFeedbackType == 'minus') ? minusText : '';                    
                } else {
                    bonusFeedback = '';
                };

                if (correct == 1) {
                    if (isPractice || gameType == "bern") {
                        return feedbackArea.replace('{headerNumber}', `${streak}`).replace('{token-text}', standardFeedback).replace('{extra-text}', bonusFeedback);
                    } else {
                        if (stimIdxArray.length == 0) {
                            return feedbackArea.replace('{headerNumber}', `${finalStreak}`).replace('{token-text}', standardFeedback).replace('{extra-text}', bonusFeedback);
                        } else {
                            return playArea.replace('{headerNumber}', `<span style="color:green; font-weight:bold">${streak}</span>`).replace('{tileContent}', '');            
                        };
                    };
                } else {
                    return feedbackArea.replace('{headerTitle}', `Final Streak:`).replace('{headerNumber}', `${finalStreak}`).replace('{token-text}', standardFeedback).replace('{extra-text}', bonusFeedback);
                };
            },
            choices: "NO_KEYS",
            trial_duration: 2000,
            data: {phase: 'feedback', round: round + 1},
            on_finish: function(data) {
                if (tokenArray_win.length == 0) {
                    tokenArray_win = makeTokenArray();
                };
                if (tokenArray_loss.length == 0) {
                    tokenArray_loss = makeTokenArray();
                };
                data.trial_idx = trial;
                data.practice = isPractice;
                if (isPractice && trial == 4 || !isPractice && stimIdxArray.length == 0) {
                    episode = 0;
                    jsPsych.endCurrentTimeline();
                };
                trial++;
            },
        };

        this.timeline = [iti, response, outcome, tokens];
        this.repetitions = 100;
    };

    const tileGame_1 = new MakeTileGame(0, settings.gameType, false, null, settings.colorNames_1, settings.colorHex_1);
    const tileGame_2 = new MakeTileGame(1, settings.gameType, false, null, settings.colorNames_2, settings.colorHex_2);


   /*
    *
    *   QUESTIONS
    *
    */

    // scales
    const zeroToExtremely = ["0<br>A little", '1', '2', '3', '4', '5', '6', '7', '8', '9', "10<br>Extremely"];
    const zeroToALot = ['0<br>A little', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10<br>A lot'];
    const scbScale = ['-4<br>Way too easy', '-3', '-2', '-1', '0<br>Neither too easy nor too difficult', '1', '2', '3', '4<br>Way too difficult'];

    // constructor functions
    function MakeFlowQs(round) {
        const secondVersion = (round == 1) ? 'Round 1' : 'Round 2';
        this.type = jsPsychSurveyLikert;
        this.preamble = `<div style='padding-top: 50px; width: 850px; font-size:16px; color:rgb(109, 112, 114)'>
        <p>Thank you for completing ${secondVersion} the Tile Game!</p>
        <p>During ${secondVersion} of the Tile Game, to what extent did you feel<br><b>immersed</b> and <b>engaged</b> in what you were doing?</p>
        <p>Report the degree to which you felt immersed and engaged by answering the following questions.</p></div>`;
        this.questions = [
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>During ${secondVersion} of the Tile Game, how <strong>absorbed</strong> did you feel in what you were doing?</div>`,
                name: `absorbed`,
                labels: ["0<br>Not very absorbed", '1', '2', '3', '4', '5', '6', '7', '8', '9', "10<br>More absorbed than I've ever felt"],
                required: true,
            },
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>During ${secondVersion} of the Tile Game, how <strong>immersed</strong> did you feel in what you were doing?</div>`,
                name: `immersed`,
                labels: ["0<br>Not very immersed", '1', '2', '3', '4', '5', '6', '7', '8', '9', "10<br>More immersed than I've ever felt"],
                required: true,
            },
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>During ${secondVersion} of the Tile Game, how <strong>engaged</strong> did you feel in what you were doing?</div>`,
                name: `engaged`,
                labels: ["0<br>Not very engaged", '1', '2', '3', '4', '5', '6', '7', '8', '9', "10<br>More engaged than I've ever felt"],
                required: true,
            },
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>During ${secondVersion} of the Tile Game, how <strong>engrossed</strong> did you feel in what you were doing?</div>`,
                name: `engrossed`,
                labels: ["0<br>Not very engrossed", '1', '2', '3', '4', '5', '6', '7', '8', '9', "10<br>More engrossed than I've ever felt"],
                required: true,
            },
        ];
        this.randomize_question_order = false;
        this.scale_width = 700;
        this.data = {round: round};
        this.on_finish = (data) => {
            dmPsych.saveSurveyData(data);
        };
    };

    function MakeEnjoyQs(round) {
        const secondVersion = (round == 1) ? 'Round 1' : 'Round 2';
        this.type = jsPsychSurveyLikert;
        this.preamble = `<div style='padding-top: 50px; width: 850px; font-size:16px; color:rgb(109, 112, 114)'>

        <p>Below are a few more questions about ${secondVersion} of the Tile Game.</p>

        <p>Instead of asking about immersion and engagement, these questions ask about <strong>enjoyment</strong>.<br>
        Report how much you <strong>enjoyed</strong> ${secondVersion} of the Tile Game by answering the following questions.</p></div>`;
        this.questions = [
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>How much did you <strong>enjoy</strong> playing ${secondVersion} of the Tile Game?</div>`,
                name: `enjoyable`,
                labels: zeroToALot,
                required: true,
            },
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>How much did you <strong>like</strong> playing ${secondVersion} of the Tile Game?</div>`,
                name: `like`,
                labels: zeroToALot,
                required: true,
            },
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>How much did you <strong>dislike</strong> playing ${secondVersion} of the Tile Game?</div>`,
                name: `dislike`,
                labels: zeroToALot,
                required: true,
            },
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>How much <strong>fun</strong> did you have playing ${secondVersion} of the Tile Game?</div>`,
                name: `fun`,
                labels: zeroToALot,
                required: true,
            },
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>How <strong>entertaining</strong> was ${secondVersion} of the Tile Game?</div>`,
                name: `entertaining`,
                labels: zeroToExtremely,
                required: true,
            },
        ];
        this.randomize_question_order = false;
        this.scale_width = 700;
        this.data = {round: round};
        this.on_finish = (data) => {
            dmPsych.saveSurveyData(data);
        };
    };

    function MakeEffortQs(round) {
        const secondVersion = (round == 1) ? 'Round 1' : 'Round 2';
        this.type = jsPsychSurveyLikert;
        this.questions = [
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>How <b>effortful</b> was ${secondVersion} of the Tile Game?</div>`,
                name: `effort`,
                labels: zeroToExtremely,
                required: true,
            },
        ];
        this.randomize_question_order = false;
        this.scale_width = 700;
        this.data = {round: round};
        this.on_finish = (data) => {
            dmPsych.saveSurveyData(data);      
        };
    };

    function MakeScbQs(round) {
        this.type = jsPsychSurveyLikert;
        this.questions = [
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>Was <b>Round 1</b> of the Tile Game too easy, too difficult, or somewhere in between?</div>`,
                name: `scb_1`,
                labels: scbScale,
                required: true,
            },
            {
                prompt: `<div style='color:rgb(109, 112, 114)'>Was <b>Round 2</b> of the Tile Game too easy, too difficult, or somewhere in between?</div>`,
                name: `scb_2`,
                labels: scbScale,
                required: true,
            },
        ];
        this.randomize_question_order = false;
        this.scale_width = 700;
        this.data = {round: round};
        this.on_finish = (data) => {
            dmPsych.saveSurveyData(data);      
        };
    };


    // timeline: second wheel
    p.tileGame_timeline_1 = {
        timeline: [ attnChk1, tileGame_1, new MakeFlowQs(1), new MakeEnjoyQs(1), new MakeEffortQs(1)],
    };

    p.tileGame_timeline_2 = {
        timeline: [ attnChk2, tileGame_2, new MakeFlowQs(2), new MakeEnjoyQs(2), new MakeEffortQs(2), new MakeScbQs(2)],
    };

   /*
    *
    *   Demographics
    *
    */

    p.demographics = (function() {


        const taskComplete = {
            type: jsPsychInstructions,
            pages: [`<div class='parent' style='color: rgb(109, 112, 114)'>
                    <p>Both games are now complete!</p>
                    <p>To finish this study, please continue to answer a few final questions.</p>
                    </div>`],
            show_clickable_nav: true,
            post_trial_gap: 500,
            allow_keys: false,
        };


        const freeResponse = {
            type: jsPsychSurvey,
            pages: [
                [
                    {
                        type: 'multi-choice',
                        prompt: `If you had to choose, which round of the Tile Game did you find most immersive and engaging?`,
                        options: ['Round 1', 'Round 2'],
                        name: 'forcedChoice',
                    },
                    {
                        type: 'text',
                        prompt: `In the space below, please explain your answer in as much detail as possible.`,
                        textbox_rows: 7,
                        name: 'explanation',
                    },
                ],
            ],
            button_label_finish: 'Next',
            on_finish: (data) => {
                dmPsych.saveSurveyData(data); 
            },
        };

        const gender = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your gender?</p>',
            choices: ['Male', 'Female', 'Other'],
            on_finish: (data) => {
                data.gender = data.response;
            }
        };

        const age = {
            type: jsPsychSurveyText,
            questions: [
                {
                    prompt: "Age:", 
                    name: "age",
                    required: true,
                }
            ],
            on_finish: (data) => {
                dmPsych.saveSurveyData(data); 
            },
        }; 

        const ethnicity = {
            type: jsPsychSurveyHtmlForm,
            preamble: '<p>What is your race / ethnicity?</p>',
            html: `<div style="text-align: left">
            <p>White / Caucasian <input name="ethnicity" type="radio" value="white"/></p>
            <p>Black / African American <input name="ethnicity" type="radio" value="black"/></p>
            <p>East Asian (e.g., Chinese, Korean, Vietnamese, etc.) <input name="ethnicity" type="radio" value="east-asian"/></p>
            <p>South Asian (e.g., Indian, Pakistani, Sri Lankan, etc.) <input name="ethnicity" type="radio" value="south-asian"/></p>
            <p>Latino / Hispanic <input name="ethnicity" type="radio" value="hispanic"/></p>
            <p>Middle Eastern / North African <input name="ethnicity" type="radio" value="middle-eastern"/></p>
            <p>Indigenous / First Nations <input name="ethnicity" type="radio" value="indigenous"/></p>
            <p>Bi-racial <input name="ethnicity" type="radio" value="indigenous"/></p>
            <p>Other <input name="other" type="text"/></p>
            </div>`,
            on_finish: (data) => {
                data.ethnicity = data.response.ethnicity;
                data.other = data.response.other;
            }
        };

        const english = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>Is English your native language?:</p>',
            choices: ['Yes', 'No'],
            on_finish: (data) => {
                data.english = data.response;
            }
        };  

        const finalWord = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Questions? Comments? Complains? Provide your feedback here!", rows: 10, columns: 100, name: "finalWord"}],
            on_finish: (data) => {
                dmPsych.saveSurveyData(data); 
            },
        }; 


        const demos = {
            timeline: [taskComplete, freeResponse, gender, age, ethnicity, english, finalWord]
        };

        return demos;

    }());


   /*
    *
    *   SAVE DATA
    *
    */

    p.save_data = {
        type: jsPsychPipe,
        action: "save",
        experiment_id: "mF9r2WCUBNyZ",
        filename: dmPsych.filename,
        data_string: ()=>jsPsych.data.get().csv()
    };

    return p;

}());

const timeline = [exp.consent, exp.tileGame_timeline_1, exp.tileGame_timeline_2, exp.demographics, exp.save_data];

jsPsych.run(timeline);
