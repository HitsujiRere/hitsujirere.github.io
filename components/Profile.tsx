import Code from './Code'

const calcAge = (birthdate: Date) => {
  const today = new Date();
	const birthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
	const age = today.getFullYear() - birthdate.getFullYear();
	if (today >= birthday) {
		return age;
	} else {
    return age - 1;
  }
}

const birthday = new Date("2003-3-31");

class DejimaMikihide {
  realName = "出島 幹英";
  penName = "ひつじ れれ";
  birthday = new Date('2003-3-31');
  age = 19;
  languages = {
    good: [
      "C", "C++", "C#", "JavaScript", "Python",
    ],
    hadUsed: [
      "Java", "TypeScript",
    ],
    learning: [
      "Rust", "TypeScript", "Go",
    ],
  };
  frameworks = {
    good: [
      "Node.js", "Processing", ".NET Framework",
    ],
    hadUsed: [
      "Next.js",
    ],
  };
  skills = {
    competitiveProgramming: {
      language: ["C++"],
      AtCoder: {
        user: "Deji",
        highestRate: 1455,
      }
    }
  };
}

const profile = `
class DejimaMikihide {
  realName = "出島 幹英";
  penName = "ひつじ れれ";
  birthday = new Date('2003-3-31');
  age = 19;
  languages = {
    good: [
      "C", "C++", "C#", "JavaScript", "Python",
    ],
    hadUsed: [
      "Java", "TypeScript",
    ],
    learning: [
      "Rust", "TypeScript", "Go",
    ],
  };
  frameworks = {
    good: [
      "Node.js", "Processing", ".NET Framework",
    ],
    hadUsed: [
      "Next.js",
    ],
  };
  skills = {
    competitiveProgramming: {
      language: ["C++"],
      AtCoder: {
        user: "Deji",
        highestRate: 1455,
      }
    }
  };
}
`;

const Profile = () => {
  return (
    <div className='bg-gray-800 p-8'>
      <div className='mx-auto max-w-screen-xl space-y-1'>
        <h2 id="profile" className='text-2xl font-bold text-white'>PROFILE</h2>
        <Code code={profile}/>
      </div>
    </div>
  );
};

export default Profile;
