export const base_url = process.env.REACT_APP_BASE_URL;
export const img_url = process.env.REACT_APP_IMG_URL;

export const LoginApi = async ({ _data }) => {
  return await fetch(base_url + "login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  }).then((response) => response.json());
};

export const RegisterApi = async ({ _data }) => {
  return await fetch(base_url + "addusers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  }).then((response) => response.json());
};

export const VerifyEmailApi = async ({ _data }) => {
  return await fetch(base_url + "verifyemail", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  }).then((response) => response.json());
};

export const ForgetPasswordApi = async ({ _data }) => {
  return await fetch(base_url + "checkforgetpassword", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  }).then((response) => response.json());
};

export const ForgetConfirmPasswordApi = async ({ _data }) => {
  return await fetch(base_url + "updateforgetpassword", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  }).then((response) => response.json());
};

export const ChangePasswordApi = async ({ _data }) => {
  return await fetch(base_url + "changepassword", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  }).then((response) => response.json());
};

export const EditProfileApi = async ({ _data }) => {
  const formData = new FormData();
  formData.append("id", _data.id);
  formData.append("first_name", _data.first_name);
  formData.append("last_name", _data.last_name);
  formData.append("email", _data.email);
  formData.append("phone", _data.phone);
  formData.append("profile", _data.profile);
  return await fetch(base_url + "userprofileupdate", {
    method: "POST",
    body: formData,
    // headers: {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    // },
    // body: JSON.stringify(_data),
  }).then((response) => response.json());
};

export const ServiceApi = async () => {
  return await fetch(base_url + "getservice", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const BusinessRegisterApi = async ({ _data }) => {
  const formData = new FormData();
  formData.append("firstName", _data.firstName);
  formData.append("lastName", _data.lastName);
  formData.append("companyName", _data.companyName);
  formData.append("email", _data.email);
  formData.append("phonenumber", _data.phonenumber);
  formData.append("interest_option", _data.interest_option);
  formData.append("qtyofcars", _data.qtyofcars);
  formData.append("message", _data.message);
  formData.append("registerno", _data.registerno);
  formData.append("officeno", _data.officeno);
  for (let i = 0; i < _data.files.length; i++) {
    formData.append(`files[${i}]`, _data.files[i]);
  }

  return await fetch(base_url + "addbusiness_users", {
    method: "POST",
    body: formData,
  }).then((response) => response.json());
};

export const VehicleApi = async () => {
  return await fetch(base_url + "getvehicles", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const BrandApi = async () => {
  return await fetch(base_url + "getbrands", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const BodyApi = async () => {
  return await fetch(base_url + "getbodytype", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const FuelApi = async () => {
  return await fetch(base_url + "getfuel", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const VehiclesSearchApi = async ({ _data }) => {
  return await fetch(base_url + "vehicles_search", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  }).then((response) => response.json());
};

export const VehicleDetailApi = async ({ _data }) => {
  return await fetch(base_url + "getvehiclesdetail/" + _data.vid, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const VehiclePhotosApi = async ({ _data }) => {
  return await fetch(base_url + "getvehiclesphotos/" + _data.vid, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const VehicleColorsApi = async ({ _data }) => {
  return await fetch(base_url + "getvehiclescolor/" + _data.vid, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const VehicleFeaturesApi = async ({ _data }) => {
  return await fetch(base_url + "getvehiclesfeatures/" + _data.vid, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const VehiclePackageApi = async ({ _data }) => {
  return await fetch(base_url + "getvehiclespkg/" + _data.vid, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const BookingApi = async ({ _data }) => {
  console.log("BookingApi data... ", _data);
  return await fetch(base_url + "adduserbookings", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  }).then((response) => response.json());
};

export const BookingCheckApi = async ({ _data }) => {
  return await fetch(base_url + "checkbookings", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  }).then((response) => response.json());
};

export const BookingListApi = async ({ _data }) => {
  return await fetch(base_url + "bookingslist", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_data),
  }).then((response) => response.json());
};

export const BookingIDApi = async ({ _data }) => {
  return await fetch(base_url + "getbookingid/" + _data.bid, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const BookingUploadDocumentApi = async ({ _data }) => {
  const formData = new FormData();
  formData.append("booking_id", _data.booking_id);
  formData.append("driving_license_front", _data.driving_license_front);
  formData.append("driving_license_back", _data.driving_license_back);
  formData.append("national_id_front", _data.national_id_front);
  formData.append("national_id_back", _data.national_id_back);
  return await fetch(base_url + "uploaduserbookingfiles", {
    method: "POST",
    body: formData,
  }).then((response) => response.json());
};

export const CheckUserIDApi = async ({ _data }) => {
  console.log("CheckUserIDApi data...", _data.user_id);
  return await fetch(base_url + "checkuserid/" + _data.user_id, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
