function get(element) {
    return document.getElementById(element).value;
}

function email_form() {
    if (!document.getElementsByTagName("form")[0].checkValidity()) {
        return false;
    }
    const fname = get("fname");
    const lname = get("lname");
    const phone = get("phone");
    const email = get("email");
    const property = get("property");
    const bedrooms = get("bedrooms");
    const bathrooms = get("bathrooms");
    const price = get("price");
    const comments = get("comments");
    const email_body =
        `First Name: ${fname}%0D%0A
         Last Name: ${lname}%0D%0A
         Phone: ${phone}%0D%0A
         Email: ${email}%0D%0A
         Property: ${property}%0D%0A
         Bedrooms: ${bedrooms}%0D%0A
         Bathrooms: ${bathrooms}%0D%0A
         Price: ${price}%0D%0A
         Comments: ${comments}`;

    window.open("mailto:cbusse1@my.centennialcollege.ca?subject=Real Estate Website Inquiry&body=" + email_body);
}

document.getElementById("submit").addEventListener("click", email_form);