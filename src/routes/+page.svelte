<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Sun, Moon } from 'lucide-svelte';
	import { setMode, resetMode } from 'mode-watcher';
    import { Badge } from 'flowbite-svelte';
    import { Indicator } from 'flowbite-svelte';
    import * as Card from "$lib/components/ui/card";
    import * as Select from "$lib/components/ui/select";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";

    const frameworks = [
      {
        value: "sveltekit",
        label: "SvelteKit"
      },
      {
        value: "next",
        label: "Next.js"
      },
      {
        value: "astro",
        label: "Astro"
      },
      {
        value: "nuxt",
        label: "Nuxt.js"
      }
    ];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" size="icon">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>

<Accordion.Root class="w-full sm:max-w-[70%]">
	<Accordion.Item value="item-1">
		<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
		<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-2">
		<Accordion.Trigger>Is it styled?</Accordion.Trigger>
		<Accordion.Content>
			Yes. It comes with default styles that matches the other components' aesthetic.
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item value="item-3">
		<Accordion.Trigger>Is it animated?</Accordion.Trigger>
		<Accordion.Content>
			Yes. It's animated by default, but you can disable it if you prefer.
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
  
<Badge>Default</Badge>
<Badge color="dark">Dark</Badge>
<Badge color="red">Red</Badge>
<Badge color="green">Green</Badge>
<Badge color="yellow">Yellow</Badge>
<Badge color="indigo">Indigo</Badge>
<Badge color="purple">Purple</Badge>
<Badge color="pink">Pink</Badge>

<span class="flex items-center"><Indicator size="sm" color="orange" class="me-1.5" />Visitors</span>
<span class="flex items-center"><Indicator size="sm" color="purple" class="me-1.5" />Sessions</span>
<span class="flex items-center"><Indicator size="sm" color="indigo" class="me-1.5" />Customers</span>
<span class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />Revenue</span>


  <Card.Root class="w-[350px]">
    <Card.Header>
      <Card.Title>Create project</Card.Title>
      <Card.Description>Deploy your new project in one-click.</Card.Description>
    </Card.Header>
    <Card.Content>
      <form>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="name">Name</Label>
            <Input id="name" placeholder="Name of your project" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <Label for="framework">Framework</Label>
            <Select.Root>
              <Select.Trigger id="framework">
                <Select.Value placeholder="Select" />
              </Select.Trigger>
              <Select.Content>
                {#each frameworks as framework}
                  <Select.Item value={framework.value} label={framework.label}
                    >{framework.label}</Select.Item
                  >
                {/each}
              </Select.Content>
            </Select.Root>
          </div>
        </div>
      </form>
    </Card.Content>
    <Card.Footer class="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </Card.Footer>
  </Card.Root>