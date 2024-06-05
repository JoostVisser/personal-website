import '@testing-library/jest-dom/vitest'
import { render, screen } from '@testing-library/svelte'
import { expect, test } from 'vitest'

import ResumeCard from '$lib/components/ResumeCard.svelte'


test("languages show as code block", () => {
    const languages = 'Svelte, Tailwind, Node.js'
    render(ResumeCard, { languages })

    const badges = screen.getAllByTestId('language-list');
    expect(badges).toHaveLength(1);

    for (const language of languages.split(', ')) {
        const badge = screen.getByText(language, { exact: false });
        expect(badge).toBeInTheDocument();
    }
})

test("no languages shows no badge", () => {
    render(ResumeCard);

    const badge = screen.queryByTestId('language-list');
    expect(badge).not.toBeInTheDocument();
})
