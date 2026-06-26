import { Accordion } from "@base-ui/react";
import { FaPlus } from "react-icons/fa";

export default function Home(){
    return(
        <main className="flex h-full min-h-[60vh] flex-col justify-center gap-8 text-text">
            <section className="max-w-3xl">
                <p className="mb-4 inline-flex rounded-full border border-edge/40 bg-back px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-edge">
                    Activity Tracker
                </p>
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                    Track what matters, one activity at a time.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 md:text-lg">
                    This app helps you capture activities, review progress, and discover patterns in a simple dashboard.
                    It is a placeholder landing page for now, but it gives a quick overview of what the product will do.
                </p>
            </section>
            <Accordion.Root className="flex w-full max-w-80 flex-col border border-neutral-950 text-neutral-950 dark:border-white dark:text-white">
                <Accordion.Item>
                    <Accordion.Header>
                        <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 bg-transparent px-3 py-2 text-left text-sm font-normal text-neutral-950 select-none hover:not-data-disabled:bg-neutral-100 focus-visible:relative focus-visible:z-1 focus-visible:outline-2 focus-visible:outline-neutral-950 dark:focus-visible:outline-white dark:text-white dark:hover:not-data-disabled:bg-neutral-800">
                        What is Base UI?
                        <FaPlus/>
                        </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden text-sm transition-[height] duration-150 ease-[ease-out] data-ending-style:h-0 data-starting-style:h-0">
                        <div className="px-3 py-2">
                            Base UI is a library of high-quality unstyled React components for design systems and
                            web apps.
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion.Root>
            <section className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-edge/30 bg-back/70 p-5 shadow-sm">
                    <h2 className="text-lg font-semibold">Log activities</h2>
                    <p className="mt-2 text-sm leading-6">
                        Add activity entries quickly and keep your daily progress in one place.
                    </p>
                </div>
                <div className="rounded-2xl border border-edge/30 bg-back/70 p-5 shadow-sm">
                    <h2 className="text-lg font-semibold">Review overview</h2>
                    <p className="mt-2 text-sm leading-6">
                        See a simple snapshot of recent work, habits, or routines at a glance.
                    </p>
                </div>
                <div className="rounded-2xl border border-edge/30 bg-back/70 p-5 shadow-sm">
                    <h2 className="text-lg font-semibold">Get recommendations</h2>
                    <p className="mt-2 text-sm leading-6">
                        Use the recommendations flow to explore next steps or ideas for your activity.
                    </p>
                </div>
            </section>

            <section className="flex flex-wrap gap-3">
                <a
                    href="/create"
                    className="rounded-full bg-edge px-5 py-3 text-sm font-semibold text-back transition-transform hover:-translate-y-0.5"
                >
                    Start tracking
                </a>
                <a
                    href="/overview"
                    className="rounded-full border border-edge/40 bg-transparent px-5 py-3 text-sm font-semibold text-edge transition-colors hover:bg-accent/40"
                >
                    View overview
                </a>
            </section>
        </main>
    );
}