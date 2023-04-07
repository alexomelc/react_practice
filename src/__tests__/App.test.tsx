import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it } from "vitest";

describe('APP', () => {
    it('should work as expected', () => {
        render(<App />);
        screen.debug()
        expect(1 + 1).toBe(2);
    })
})