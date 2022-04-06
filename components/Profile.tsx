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
  realName = '出島 幹英';
  penName = 'ひつじ れれ';
  birthday = new Date('2003-3-31');
  age = 19;
  languages = {
    good: [
      'C', 'C++', 'C#', 'JavaScript', 'Python',
    ],
    hadUsed: [
      'Java', 'TypeScript',
    ],
    learning: [
      'Rust', 'TypeScript', 'Go',
    ],
  };
  frameworks = {
    good: [
      'Node.js', 'Processing', '.NET Framework',
    ],
    hadUsed: [
      'Next.js',
    ],
  };
  skills = {
    competitiveProgramming: {
      language: ['C++'],
      AtCoder: {
        user: 'Deji',
        highestRate: 1455,
      }
    }
  };
}
`;

const Profile = () => {
  return (
    <div id="profile" className='px-4 py-20 bg-gray-900 md:hover:bg-gray-800 duration-500'>
      <div className='mx-auto max-w-screen-lg space-y-5'>
        <h2 className="text-2xl font-light text-yellow-400">PROFILE</h2>
        <Code code={profile}/>
      </div>
    </div>
  );
};

export default Profile;
