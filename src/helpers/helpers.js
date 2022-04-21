export const getDate = (date) => {
    if (date == null || date == undefined || date == 0) return "-";
    const new_date = new Date(date);
    if (new_date.toString() === "Invalid Date") return "-";
    else {
        return convertToDate(new_date);
    }
};

export const convertToDate = (new_date, date = 0, Acc = "+") => {
    let dateN = "";
    switch (Acc) {
        case "+":
            dateN = parseInt(new_date.getDate() + date)
            break;
        case "-":
            dateN = parseInt(new_date.getDate() - date)
            break;
        default:
            dateN = parseInt(new_date.getDate() + date)
    }

    dateN = dateN.toString().padStart(2, "0");
    let month = (new_date.getMonth() + 1).toString().padStart(2, "0");
    let year = new_date.getFullYear().toString();
    return `${year}-${month}-${dateN}`;
};