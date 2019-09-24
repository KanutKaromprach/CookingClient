export class CookingList {
    pork: string[];
    chicken: string[];
    basil: string[];
    seasonBasil: string[];
    seasonFiredRice: string[];

    constructor() {
        this.pork = ['เนื้อหมู', 'หมูชิ้น', 'หมู'];
        this.chicken = ['เนื้อไก่', 'ไก่', 'อกไก่'];
        this.basil = ['กระเพรา', 'ใบกระเพรา'];
        this.seasonBasil = ['น้ำมันพืช', 'น้ำมันรำข้าว', 'น้ำปลา', 'พริกสด', 'พริก', 'กระเทียม'];
        this.seasonFiredRice = ['กระเทียม', 'หอมใหญ่', 'น้ำตาล', 'น้ำมันพืช', 'พริกไทย', 'ซีอิ๊วขาว', 'น้ำปลา่'];
    }
}
