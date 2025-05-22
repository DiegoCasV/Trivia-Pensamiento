const COR = "COR";
const INCOR = "INCON";

export const saveCors = (correctas, incorrectas) => {
    if (getCor() === null) {
        localStorage.setItem(COR, correctas);
        localStorage.setItem(INCOR, incorrectas);
    }
};

export const getCor = () => {
    const cor = localStorage.getItem(COR);
    return cor;
};

export const getIncor = () => {
    const cor = localStorage.getItem(INCOR);
    return cor;
};

export const sumCor = () => {
    const aaa = Number(getCor());
    const bbb = Number(aaa+1);
    localStorage.setItem(COR, bbb);
};

export const sumInCor = () => {
    const aaa = Number(getIncor());
    const bbb = Number(aaa+1);
    localStorage.setItem(INCOR, bbb);
};