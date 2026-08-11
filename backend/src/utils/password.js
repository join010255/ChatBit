import bcrypt from "bcrypt";

class Password{
    async hashPassword(planText){
        const passwordHash = await bcrypt.hash(planText, 10);
        return passwordHash;
    };

    async comparePassword(planText, hashPassword){
        return bcrypt.compare(planText, hashPassword)
    };
};

export default new Password;