<script lang="ts">
	import { skillicons } from '$lib/funcs/skillicons';
	import { TwitterBrand, GithubBrand } from 'svelte-awesome-icons';
	import SkillCard from './SkillCard.svelte';
	import { Timeline, TimelineItem } from '$lib/components/timeline';
</script>

<div class="space-y-8">
	<h2 class="text-xl font-bold">ABOUT</h2>

	<div class="space-y-4">
		<div>
			<h3 class="text-2xl font-medium">ひつじれれ</h3>
			<p class="text-sm text-gray-600">情報系大学生 3年生</p>
		</div>
		<p>元気に過ごしています</p>
		<div class="flex gap-2">
			<a href="https://twitter.com/HitsujiRere" target="_blank">
				<TwitterBrand size="1.5rem" color="#1DA1F2" />
			</a>
			<a href="https://github.com/HitsujiRere" target="_blank">
				<GithubBrand size="1.5rem" color="#171515" />
			</a>
		</div>
	</div>

	<div class="space-y-4">
		<h3 class="text-lg font-medium">Skill</h3>
		<div class="space-y-2">
			<h4>Language</h4>
			<div class="flex flex-wrap gap-4">
				<SkillCard name="C" icon={skillicons('c')} stars={3} />
				<SkillCard name="C++" icon={skillicons('cpp')} stars={4} />
				<SkillCard name="C#" icon={skillicons('cs')} stars={3} />
				<SkillCard name="TypeScript" icon={skillicons('ts')} stars={4} />
				<SkillCard name="JavaScript" icon={skillicons('js')} stars={5} />
				<SkillCard name="CSS" icon={skillicons('css')} stars={4} />
				<SkillCard name="Python" icon={skillicons('py')} stars={4} />
				<SkillCard name="Rust" icon={skillicons('rust')} stars={2} />
				<SkillCard name="Processing" icon={skillicons('processing')} stars={5} />
			</div>
		</div>
		<div class="space-y-2">
			<h4>Library / Framework</h4>
			<div class="flex flex-wrap gap-4">
				<SkillCard name="React" icon={skillicons('react')} stars={4} />
				<SkillCard name="Next.js" icon={skillicons('next')} stars={4} />
				<SkillCard name="Vue.js" icon={skillicons('vue')} stars={4} />
				<SkillCard name="Unity" icon={skillicons('unity')} stars={2} />
			</div>
		</div>
		<div class="space-y-2">
			<h4>競技プログラミング</h4>
			<div class="flex flex-wrap gap-4">
				<SkillCard name="AtCoder" icon="https://img.atcoder.jp/assets/top/img/logo_bk.svg">
					Highest Rate: 1455
				</SkillCard>
			</div>
		</div>
	</div>
</div>
