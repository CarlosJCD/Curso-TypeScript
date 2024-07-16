enum Role {
    Doctor,
    Anestesista, 
    Asistente,
    Administración
}

interface Staff {
    name: string,
    email: string,
    role: Role
}

interface Billable {
    total: number,
    currentBill() : string
}

const medico = {
    name: "Jariel",
    email: "email@email.com",
    role: Role.Doctor,
    total: 50,
    currentBill(){
        return `El valor actual de la factura es de ${this.total }`
    }
}

const printStaff = (staff: Staff) => {
     console.log(staff);
}

const printCurrentBill = (bill: Billable) => {
     console.log(bill.currentBill());
}

printStaff(medico);
printCurrentBill(medico);