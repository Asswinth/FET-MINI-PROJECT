var GovernmentForm = /** @class */ (function () {
    function GovernmentForm() {
    }
    GovernmentForm.prototype.validateEmail = function (email) {
        var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };
    GovernmentForm.prototype.validatePhone = function (phone) {
        var re = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        return re.test(phone);
    };
    GovernmentForm.prototype.checkPasswordStrength = function (password) {
        var strength = 0;
        if (password.length >= 6) {
            strength++;
        }
        if (password.match(/[a-z]+/)) {
            strength++;
        }
        if (password.match(/[A-Z]+/)) {
            strength++;
        }
        if (password.match(/[0-9]+/)) {
            strength++;
        }
        if (strength === 1) {
            return "Weak";
        }
        else if (strength === 2) {
            return "Moderate";
        }
        else {
            return "Strong";
        }
    };
    GovernmentForm.prototype.submitForm = function () {
        $('.error').text('');
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var address = $('#address').val();
        var nationality = $('#nationality').val();
        var citizenship = $('#citizenship').val();
        var gender = $('#gender').val();
        var comment = $('#comment').val();
        var dob = $('#dob').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();
        var isValid = true;
        if (name === '') {
            $('#nameError').text('Please enter your name');
            isValid = false;
        }
        if (!this.validateEmail(email)) {
            $('#emailError').text('Please enter a valid email address');
            isValid = false;
        }
        if (!this.validatePhone(phone)) {
            $('#phoneError').text('Please enter a valid phone number (e.g., 123-456-7890)');
            isValid = false;
        }
        if (address === '') {
            $('#addressError').text('Please enter your address');
            isValid = false;
        }
        if (nationality === '') {
            $('#nationalityError').text('Please enter your nationality');
            isValid = false;
        }
        if (citizenship === '') {
            $('#citizenshipError').text('Please enter your citizenship');
            isValid = false;
        }
        if (gender === null) {
            $('#genderError').text('Please select your gender');
            isValid = false;
        }
        if (comment === '') {
            $('#commentError').text('Please enter your comment');
            isValid = false;
        }
        if (dob === '') {
            $('#dobError').text('Please enter your date of birth');
            isValid = false;
        }
        if (password === '') {
            $('#passwordError').text('Please enter a password');
            isValid = false;
        }
        else if (password.length < 6) {
            $('#passwordError').text('Password must be at least 6 characters long');
            isValid = false;
        }
        else {
            var strength = this.checkPasswordStrength(password);
            $('#passwordStrength').text('Password Strength: ' + strength).removeClass().addClass(strength.toLowerCase());
        }
        if (confirmPassword === '') {
            $('#confirmPasswordError').text('Please confirm your password');
            isValid = false;
        }
        else if (confirmPassword !== password) {
            $('#confirmPasswordError').text('Passwords do not match');
            isValid = false;
        }
        if (isValid) {
            $('#submittedList').html('');
            $('#submittedList').append('<li>Name: ' + name + '</li>');
            $('#submittedList').append('<li>Email: ' + email + '</li>');
            $('#submittedList').append('<li>Phone: ' + phone + '</li>');
            $('#submittedList').append('<li>Address: ' + address + '</li>');
            $('#submittedList').append('<li>Nationality: ' + nationality + '</li>');
            $('#submittedList').append('<li>Citizenship: ' + citizenship + '</li>');
            $('#submittedList').append('<li>Gender: ' + gender + '</li>');
            $('#submittedList').append('<li>Comment: ' + comment + '</li>');
            $('#submittedList').append('<li>Date of Birth: ' + dob + '</li>');
            $('#governmentForm').addClass('hidden');
            $('#submittedFields').removeClass('hidden');
        }
    };
    return GovernmentForm;
}());
$(document).ready(function () {
    var form = new GovernmentForm();
    $('#submitBtn').click(function () {
        form.submitForm();
    });
});
