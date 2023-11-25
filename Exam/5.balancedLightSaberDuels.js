function balancedLightsaberDuels(string) {
    const stack = [];

    for (let i = 0; i < string.length; i++) {
        const currentString = string.charAt(i);

        if (currentString === '(' || currentString === '!' || currentString === '{') {
            stack.push(currentString);
        } else if (currentString === ')' || currentString === '}' || currentString === '!') {

            if (stack.length === 0) {
                console.log('Not Legendary');
                return;
            };

            const previousString = stack.pop();

            if ((currentString === ')' && previousString !== '(') || (currentString === '}' && previousString !== '{') || (currentString === '!' && previousString !== '!')) {
                console.log('Legendary');
                return;
            }
        }
    };
    if(stack.length === 0 ) {
        console.log('Legendary');
    } else {
        console.log('Not Legendary');
    }
};

balancedLightsaberDuels('()()(()())');
balancedLightsaberDuels('((!!)(({!!})))')
balancedLightsaberDuels('((())')
balancedLightsaberDuels('{!}!');
balancedLightsaberDuels('({(!!}))');