const $display = document.querySelector(".display_calculator");
const $calculator = document.querySelector('.calculator')
// const $btn = document.querySelectorAll(".btn");

$calculator.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
        // console.log(e.target.textContent);

        if (e.target.textContent === 'C') {
            deleteContent($display);
            return;
        }

        if (e.target.textContent === '←') {
            const expression = $display.textContent;
            deleteDigit(expression);
            (!$display.textContent) ? $display.textContent = '0' : deleteDigit(expression);
            return;
        }

        if (e.target.textContent === '=') {
            const expression = $display.textContent;
            operaction(expression);
            return;
        }

        if ($display.textContent === '0' || $display.textContent === "Error!") $display.textContent = e.target.textContent;

        else $display.textContent += e.target.textContent;


    }
});


function deleteContent($display) {
    $display.textContent = "0"
}

function deleteDigit(expression) {
    const newexpression = expression.slice(0, -1);
    $display.textContent = newexpression;
}

function operaction(expression) {
    if (!expression) $display.textContent = 'Error!';
    try {
        const result = eval(expression);
        $display.textContent = result;
    } catch (error) {
        // console.log(error.message);
        $display.textContent = "Error!";
    }

}
