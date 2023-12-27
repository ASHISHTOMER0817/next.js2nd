import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, "Please provide a username"],
			unique: true,
		},
		email: {
			type: String,
			required: [true, "Please provide a username"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please provide a username"],
			unique: true,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		forgotPasswordToken: String,
		forgetPasswordTokenExpiry: Date,
		verifyToken: String,
		verifyTokenExpiry: Date,
	},
	{ timeStamp: true }
);

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
