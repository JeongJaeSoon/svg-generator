import { Injectable } from '@nestjs/common';

@Injectable()
export class SvgGeneratorService {
  generateSVG(color: string, name: string): string {
    return `
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" style="stroke: black; fill: #${color}" />
        <text x="10" y="50" font-family="Arial" font-size="14" fill="black">${name}</text>
      </svg>
    `;
  }
}
