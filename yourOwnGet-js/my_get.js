/*
    Before the optional chaining operator (?.) existed, it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.
    Let's write our own version as a get function. The function gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place. The function signature is as such:

    Eg:

const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

function getFirstName(user) {
  return user.profile.name.firstName;
}

Doing getFirstName(john) works but getFirstName(jane) will error because the name property doesn't exist for jane.profile.
*/

function get(objectParam, pathParam, defaultValue) {
  let i = 0;
  let length = path.length;
  let object = objectParam;

  while(object != null && i < length) {
    object = object[String(path[i])];
    i++;
  }
  const value = i && i == length ? object : undefined;
  return value !== undefined ? value : defaultValue;
  }

