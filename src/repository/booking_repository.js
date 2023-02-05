const {Booking}=require("../models/index");
const ValidationError=require("../utils/errors/validation-error")
class BookingRepository{
    async create(data){
        try {
            const result=await Booking.create(data);
            return result;
        } catch (error) {
            if(error.name="SequelizeValidationError"){
                throw new ValidationError(error);
            }
        }
    }
}
module.exports=BookingRepository;