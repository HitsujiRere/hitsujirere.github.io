import Code from '../organisms/Code';
import Section from '../templates/Section';

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
class HitsujiRere {
  penName = 'ひつじ れれ';
  birthday = new Date('3/31');
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
    <Section id='profile'>
      <div className='space-y-5'>
        <h2 className='text-2xl font-light text-yellow-400'>PROFILE</h2>
        <div className='flex justify-center text-lg tracking-wider'>
          <Code language='javascript'>{profile}</Code>
        </div>
      </div>
    </Section>
  );
};

export default Profile;
