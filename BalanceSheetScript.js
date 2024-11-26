let USDollar = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
});
function addCurrentAssets(){
    const container = document.getElementById("CurrentAssetsGrid");
    let title1 = document.createElement("h3");
    let text1 = document.createTextNode("Cash: ");
    let input1 = document.createElement("input");
    title1.setAttribute('class', "TextStyle");
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', "Cash");
    title1.appendChild(text1);
    title1.appendChild(input1);
    container.appendChild(title1);

    let title2 = document.createElement("h3");
    let text2 = document.createTextNode("Inventory: ");
    let input2 = document.createElement("input");
    title2.setAttribute('class', "TextStyle");
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', "Inventory");
    title2.appendChild(text2);
    title2.appendChild(input2);
    container.appendChild(title2);

    let title3 = document.createElement("h3");
    let text3 = document.createTextNode("Supplies: ");
    let input3 = document.createElement("input");
    title3.setAttribute('class', "TextStyle");
    input3.setAttribute('type', 'text');
    input3.setAttribute('id', "Supplies");
    title3.appendChild(text3);
    title3.appendChild(input3);
    container.appendChild(title3);

    let title4 = document.createElement("h3");
    let text4 = document.createTextNode("Temporary Investments: ");
    let input4 = document.createElement("input");
    title4.setAttribute('class', "TextStyle");
    input4.setAttribute('type', 'text');
    input4.setAttribute('id', "TempInvestments");
    title4.appendChild(text4);
    title4.appendChild(input4);
    container.appendChild(title4);

    let title5 = document.createElement("h3");
    let text5 = document.createTextNode("Total Current Assets: ");
    title5.setAttribute('class', "LabelStyle");
    title5.setAttribute('id', "TotalCurrentAssets");
    title5.appendChild(text5);
    container.appendChild(title5);

    const button = document.getElementById("AddCurrentAssets");
    button.remove();
} //end addCurrentAssets

function addCurrentLiabilities(){
    const container = document.getElementById("CurrentLiabilitiesGrid")
    let title1 = document.createElement("h3");
    let text1 = document.createTextNode("Accounts Payable: ");
    let input1 = document.createElement("input");
    title1.setAttribute('class', "TextStyle");
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', "AccountsPayable");
    title1.appendChild(text1);
    title1.appendChild(input1);
    container.appendChild(title1);

    let title2 = document.createElement("h3");
    let text2 = document.createTextNode("Notes payable: ");
    let input2 = document.createElement("input");
    title2.setAttribute('class', "TextStyle");
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', "NotesPayable");
    title2.appendChild(text2);
    title2.appendChild(input2);
    container.appendChild(title2);

    let title3 = document.createElement("h3");
    let text3 = document.createTextNode("Interest Payable: ");
    let input3 = document.createElement("input");
    title3.setAttribute('class', "TextStyle");
    input3.setAttribute('type', 'text');
    input3.setAttribute('id', "InterestPayable");
    title3.appendChild(text3);
    title3.appendChild(input3);
    container.appendChild(title3);

    let title4 = document.createElement("h3");
    let text4 = document.createTextNode("Wages Payable: ");
    let input4 = document.createElement("input");
    title4.setAttribute('class', "TextStyle");
    input4.setAttribute('type', 'text');
    input4.setAttribute('id', "WagesPayable");
    title4.appendChild(text4);
    title4.appendChild(input4);
    container.appendChild(title4);

    let title5 = document.createElement("h3");
    let text5 = document.createTextNode("Accrued Expenses: ");
    let input5 = document.createElement("input");
    title5.setAttribute('class', "TextStyle");
    input5.setAttribute('type', 'text');
    input5.setAttribute('id', "AccruedExpenses");
    title5.appendChild(text5);
    title5.appendChild(input5);
    container.appendChild(title5);

    let title6 = document.createElement("h3");
    let text6 = document.createTextNode("Total Current Liabilities: ");
    title6.setAttribute('class', "LabelStyle");
    title6.setAttribute('id', "TotalCurrentLiabilities");
    title6.appendChild(text6);
    container.appendChild(title6);

    const button = document.getElementById("AddCurrentLiabilities");
    button.remove();
} //end addcurrentLiabilties

function addInvestmentProperty(){
    const container = document.getElementById("InvestmentPropertyGrid")
    let title1 = document.createElement("h3");
    let text1 = document.createTextNode("Land: ");
    let input1 = document.createElement("input");
    title1.setAttribute('class', "TextStyle");
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', "Land");
    title1.appendChild(text1);
    title1.appendChild(input1);
    container.appendChild(title1);

    let title2 = document.createElement("h3");
    let text2 = document.createTextNode("Building and Improvements: ");
    let input2 = document.createElement("input");
    title2.setAttribute('class', "TextStyle");
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', "BuildingAndImprovements");
    title2.appendChild(text2);
    title2.appendChild(input2);
    container.appendChild(title2);

    let title3 = document.createElement("h3");
    let text3 = document.createTextNode("Equipment: ");
    let input3 = document.createElement("input");
    title3.setAttribute('class', "TextStyle");
    input3.setAttribute('type', 'text');
    input3.setAttribute('id', "Epuipment");
    title3.appendChild(text3);
    title3.appendChild(input3);
    container.appendChild(title3);

    let title4 = document.createElement("h3");
    let text4 = document.createTextNode("Temporary Investments: ");
    let input4 = document.createElement("input");
    title4.setAttribute('class', "TextStyle");
    input4.setAttribute('type', 'text');
    input4.setAttribute('id', "TemporaryInvestments");
    title4.appendChild(text4);
    title4.appendChild(input4);
    container.appendChild(title4);

    let title6 = document.createElement("h3");
    let text6 = document.createTextNode("Total Investment Property and Equipment: ");
    title6.setAttribute('class', "LabelStyle");
    title6.setAttribute('id', "TotalInvestmentPropertyAndsEquipment");
    title6.appendChild(text6);
    container.appendChild(title6);

    const button = document.getElementById("InvestmentPropButton");
    button.remove();
}//end addInvestmentProperty

function addLongTermLiabilities(){
    const container = document.getElementById("LongTermGrid")
    let title1 = document.createElement("h3");
    let text1 = document.createTextNode("Notes Payable: ");
    let input1 = document.createElement("input");
    title1.setAttribute('class', "TextStyle");
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', "NotesPayable");
    title1.appendChild(text1);
    title1.appendChild(input1);
    container.appendChild(title1);

    let title2 = document.createElement("h3");
    let text2 = document.createTextNode("Bonds Payable: ");
    let input2 = document.createElement("input");
    title2.setAttribute('class', "TextStyle");
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', "BondsPayable");
    title2.appendChild(text2);
    title2.appendChild(input2);
    container.appendChild(title2);

    let title6 = document.createElement("h3");
    let text6 = document.createTextNode("Total Long-Term Liabilities: ");
    title6.setAttribute('class', "LabelStyle");
    title6.setAttribute('id', "TotalLongTermLiabilities");
    title6.appendChild(text6);
    container.appendChild(title6);

    const button = document.getElementById("addLongTermLiabilities");
    button.remove();

}//end addLongTermLiability

function addIntangibles(){
    const container = document.getElementById("IntangibleGrid")
    let title1 = document.createElement("h3");
    let text1 = document.createTextNode("Trade Name: ");
    let input1 = document.createElement("input");
    title1.setAttribute('class', "TextStyle");
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', "TradeNamesInput");
    title1.appendChild(text1);
    title1.appendChild(input1);
    container.appendChild(title1);

    let title2 = document.createElement("h3");
    let text2 = document.createTextNode("Goodwill: ");
    let input2 = document.createElement("input");
    title2.setAttribute('class', "TextStyle");
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', "GoodwillInput");
    title2.appendChild(text2);
    title2.appendChild(input2);
    container.appendChild(title2);

    let title6 = document.createElement("h3");
    let text6 = document.createTextNode("Total Intangibles: ");
    title6.setAttribute('class', "LabelStyle");
    title6.setAttribute('id', "TotalIntangibles");
    title6.appendChild(text6);
    container.appendChild(title6);

    const button = document.getElementById("AddIntangibles");
    button.remove();
}//end addIntangibles


//assets
let currentAssets = 0;
let investments = 0;
let intangibles = 0;

function calculateCurrentAssets(){
    let cash = document.getElementById("Cash");
    let inventory = document.getElementById("Inventory");
    let supplies = document.getElementById("Supplies");
    let tempInvestments = document.getElementById("TempInvestments");
    let total = parseFloat(cash.value) + parseFloat(inventory.value)+ parseFloat(supplies.value) + parseFloat(tempInvestments.value);
    currentAssets = total;
    let label = document.getElementById("TotalCurrentAssets");
    label.innerHTML = "Total Current Assets: " + USDollar.format(total);
    
}//end calculateCurrentAssets

function calculateInvestmentProperty(){
    let land = document.getElementById("Land");
    let building = document.getElementById("BuildingAndImprovements");
    let equipment = document.getElementById("Epuipment");
    let tempInvestments = document.getElementById("TemporaryInvestments");
    let total = parseFloat(land.value) + parseFloat(building.value)+ parseFloat(equipment.value) + parseFloat(tempInvestments.value);
    investments = total;
    let label = document.getElementById("TotalInvestmentPropertyAndsEquipment");
    label.innerHTML = "Total Investment Property and Equipment: " + USDollar.format(total);
} //end calculateInvestmentProperty

function calculateIntangibles(){
    let tradeName = document.getElementById("TradeNamesInput");
    let goodwill = document.getElementById("GoodwillInput");
    let total = parseFloat(tradeName.value) + parseFloat(goodwill.value);
    intangibles = total;
    let label = document.getElementById("TotalIntangibles");
    label.innerHTML = "Total Intangibles: " + USDollar.format(total);
}


//liabilities
let currentLiabilities = 0;
let longTerm = 0;

function calculateCurrentLiabilities(){
    let accountsPayable = document.getElementById("AccountsPayable");
    let notesPayable = document.getElementById("NotesPayable");
    let interestPayable = document.getElementById("InterestPayable");
    let wagesPayable = document.getElementById("WagesPayable");
    let accruedExpenses = document.getElementById("AccruedExpenses");
    let total = parseFloat(accountsPayable.value) + parseFloat(notesPayable.value)+ parseFloat(interestPayable.value) + parseFloat(wagesPayable.value) + parseFloat(accruedExpenses.value);
    currentLiabilities = total;
    let label = document.getElementById("TotalCurrentLiabilities");
    label.innerHTML = "Total Current Liabilities: " + USDollar.format(total);
}//end calculateCurrentLiabilities

function calculateLongTermLiabilities(){
    let notesPayable = document.getElementById("NotesPayable");
    let bondsPayable = document.getElementById("BondsPayable");
    let total = parseFloat(notesPayable.value) + parseFloat(bondsPayable.value);
    longTerm = total;
    let label = document.getElementById("TotalLongTermLiabilities");
    label.innerHTML = "Total Current Liabilities: " + USDollar.format(total);
}//end calculateLongTermLiabilities

function calculatePosition(){
    calculateCurrentAssets();
    calculateInvestmentProperty();
    calculateIntangibles();
    calculateCurrentLiabilities();
    calculateLongTermLiabilities();

    let totalAssets = document.getElementById("TotalAssets");
    let total = parseFloat(currentAssets) + parseFloat(investments) + parseFloat(intangibles);
    totalAssets.innerHTML = "Total Assets: " + USDollar.format(total);

    let totalLiabilities = document.getElementById("TotalLiabilities");
    let totalDisplay = parseFloat(currentLiabilities) + parseFloat(longTerm);
    totalLiabilities.innerHTML = "Total Liabilities: " + USDollar.format(totalDisplay);

    let position = document.getElementById("Position");
    let positionDisplay = total - totalDisplay;
    position.innerHTML = "Position: " + USDollar.format(positionDisplay);
}


