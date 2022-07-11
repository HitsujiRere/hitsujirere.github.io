import Code from './Code';

const calcAge = (birthdate: Date, today: Date) => {
  const birthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
  const age = today.getFullYear() - birthdate.getFullYear();
  if (today >= birthday) {
    return age;
  } else {
    return age - 1;
  }
};

const profile = `
class DejimaMikihide {
  realName = '出島 幹英';
  penName = 'ひつじ れれ';
  birthday = new Date('2003-3-31');
  age = ${calcAge(new Date('2003-3-31'), new Date())};
  languages = {
    good: [ 'C', 'C++', 'C#', 'JavaScript', 'Python', ],
    haveUsed: [ 'Java', 'TypeScript', 'Rust', ],
    learning: [ 'Dart', 'TypeScript', ],
    wantToLearn: [ 'Rust', 'Go', ],
  };
  frameworks = {
    good: [ 'Node.js', 'Processing', '.NET Framework', ],
    haveUsed: [ 'Unity', 'React', 'Next.js', ],
    learning: [ 'Flutter', 'Unity', ],
  };
  skills = {
    competitiveProgramming: {
      language: [ 'C++', ],
      AtCoder: { user: 'Deji', highestRate: 1455 }
    }
  };
}
`.trim();

const Profile = () => {
  return (
    <div id='profile' className='px-4 py-20 bg-gray-900 md:hover:bg-gray-800 duration-500'>
      <div className='mx-auto max-w-screen-lg space-y-5'>
        <h2 className='text-2xl font-light text-yellow-400'>PROFILE</h2>
        <div className='flex justify-center text-lg tracking-wider'>
          <Code language='javascript'>{profile}</Code>
        </div>
      </div>
    </div>
  );
};

export default Profile;
