import React, { useEffect, useRef, useState } from "react";

function Employesfrom() {
  let countrySelectRef = useRef();
  let genderSelectRef = useRef();
  let [employesData, setemployesData] = useState([]);

  let [CountriesList, setCountriesList] = useState([]);
  let [gendersList, setGendersList] = useState([]);

  let getContriesListfromserver = async () => {
    let reqOptions = {
      method: "GET",
    };

    let JSONData = await fetch(
      "http://localhost:1234/getContriesList",
      reqOptions
    );

    let JSOData = await JSONData.json();
    console.log(JSOData);

    setCountriesList(JSOData);
  };
  let getgenderListfromserver = async () => {
    let reqOptions = {
      method: "GET",
    };

    let JSONData = await fetch(
      "http://localhost:1234/getgenderList",
      reqOptions
    );

    let JSOData = await JSONData.json();
    console.log(JSOData);

    setGendersList(JSOData);
  };

  useEffect(() => {
    getContriesListfromserver();
    getgenderListfromserver();
  }, []);

  let getemployesfromserver = async () => {
    let reqOptions = {
      method: "GET",
    };
    // let url = `http://localhost:1234/getemployes/${countrySelectRef.current.value}/${genderSelectRef.current.value}`;

    let url = `http://localhost:1234/getemployes?country=${countrySelectRef.current.value}&gender=${genderSelectRef.current.value}`;

    let JSONData = await fetch(url, reqOptions);

    let JSOData = await JSONData.json();

    setemployesData(JSOData);

    console.log(JSOData);
  };

  return (
    <div>
      <form>
        <div>
          <label>country</label>
          <select ref={countrySelectRef}>
            {CountriesList.map((countryName) => {
              return <option>{countryName}</option>;
            })}
          </select>
        </div>
        <div>
          <label>gender</label>
          <select ref={genderSelectRef}>
            {gendersList.map((gender) => {
              return <option>{gender}</option>;
            })}
          </select>
        </div>

        <button
          type="button"
          onClick={() => {
            getemployesfromserver();
          }}>
          get employes
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>genders</th>
            <th>age</th>
            <th>email</th>
            <th>profile pic</th>
            <th>country</th>
          </tr>
        </thead>
        <tbody>
          {employesData.map((employeeObj) => {
            return (
              <tr>
                <td>{employeeObj.id}</td>
                <td>{employeeObj.firstName}</td>
                <td>{employeeObj.lastName}</td>
                <td>{employeeObj.gender}</td>
                <td>{employeeObj.age}</td>
                <td>{employeeObj.email}</td>
                <td>
                  {" "}
                  <img src={employeeObj.profilepic}></img>
                </td>
                <td>{employeeObj.country}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default Employesfrom;
