<script lang="ts">
	import { skillicons } from '$lib/funcs/skillicons';
	import { TwitterBrand, GithubBrand, PersonDiggingSolid } from 'svelte-awesome-icons';
	import SkillCard from './SkillCard.svelte';
	import { Timeline, TimelineItem } from '$lib/components/timeline';
</script>

<h2 class="text-xl font-bold">ABOUT</h2>

<div class="space-y-4 skew-x-6">
	<div>
		<h3 class="text-2xl font-medium">ひつじれれ</h3>
		<p class="text-sm text-gray-600">石川高専 → 金沢大学の3年生</p>
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

<div class="space-y-4 skew-x-6">
	<h3 class="text-lg font-medium">Award</h3>
	<ul class="space-y-2">
		<li>第2回全国高等専門学校 ディープラーニングコンテスト2021 : 7位</li>
		<li>Hokuriku Innovation Trial-2020 : ICTまちづくり賞</li>
		<li>パソコン甲子園2020 プログラミング部門 : 本選出場</li>
		<li>
			全国高専プログラミングコンテスト 第31回苫小牧大会(2020)
			<ul class="ml-8">
				<li>自由部門 : 特別賞</li>
				<li>パテント審査部門 : 奨励賞</li>
			</ul>
		</li>
	</ul>
</div>

<div class="space-y-4 skew-x-6">
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
			<SkillCard name="Python" icon={skillicons('py')} stars={3} />
			<SkillCard name="Rust" icon={skillicons('rust')} stars={2} />
			<SkillCard name="Processing" icon={skillicons('processing')} stars={5} />
		</div>
	</div>
	<div class="space-y-2">
		<h4>Library / Framework</h4>
		<div class="flex flex-wrap gap-4">
			<SkillCard name="React" icon={skillicons('react')} stars={4} />
			<SkillCard name="Next.js" icon={skillicons('next')} stars={4} />
			<SkillCard name="Vue.js" icon={skillicons('vue')} stars={3} />
			<SkillCard name="Unity" icon={skillicons('unity')} stars={2} />
		</div>
	</div>
</div>

<div class="space-y-4 skew-x-6">
	<h3 class="text-lg font-medium">Hobby</h3>
	<div class="flex flex-wrap items-center gap-4">
		<SkillCard name="AtCoder" icon="https://img.atcoder.jp/assets/top/img/logo_bk.svg">
			Highest Rate: 1455
		</SkillCard>
		<SkillCard name="🚧追記予定🚧">
			<PersonDiggingSolid slot="icon" size="2.5rem" color="#292524" />
		</SkillCard>
	</div>
</div>

<div class="space-y-4 skew-x-6">
	<h3 class="text-lg font-medium">History</h3>
	<div class="ml-2">
		<Timeline>
			<TimelineItem>
				<p class="text-sm text-gray-600">2023-04</p>
				<p>金沢大学に3年次編入</p>
			</TimelineItem>
			<TimelineItem>
				<p class="text-sm text-gray-600">2023-03</p>
				<p>石川工業高等専門学校 卒業</p>
			</TimelineItem>
			<TimelineItem>
				<p>🚧追記予定🚧</p>
			</TimelineItem>
			<TimelineItem>
				<p class="text-sm text-gray-600">2018-04</p>
				<p>石川工業高等専門学校 入学</p>
			</TimelineItem>
		</Timeline>
	</div>
</div>
