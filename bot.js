"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({ intents: ["Guilds", "GuildMembers", "GuildMessages"] });
const commands = [
    new discord_js_1.SlashCommandBuilder()
        .setName("setup")
        .setDescription("Установка меню ролей")
        .setDefaultMemberPermissions(discord_js_1.PermissionFlagsBits.Administrator)
];
client.on("ready", () => {
    var _a;
    console.log((_a = client.user) === null || _a === void 0 ? void 0 : _a.username);
});
client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    if (interaction.isChatInputCommand()) {
        if (interaction.commandName == "setup") {
            const embeds = [
                {
                    "title": "Идентификатор",
                    "description": "Пройди верификацию чтоб открыть дополнительные возможности.\nТак же у тебя есть право выбора!\nПойти в Русский сервер или попасть на сторону противника Английскую языковую палитру.\nТак что выбор за тобой!",
                    "color": 5375
                }
            ];
            const row = new discord_js_1.ActionRowBuilder()
                .addComponents(new discord_js_1.ButtonBuilder()
                .setCustomId("ru")
                .setEmoji("🇷🇺")
                .setStyle(discord_js_1.ButtonStyle.Primary), new discord_js_1.ButtonBuilder()
                .setCustomId("en")
                .setEmoji("🇺🇸")
                .setStyle(discord_js_1.ButtonStyle.Primary));
            // @ts-ignore
            yield ((_a = interaction.channel) === null || _a === void 0 ? void 0 : _a.send({ embeds: embeds, components: [row] }));
        }
    }
    else if (interaction.isButton()) {
        console.log(interaction.customId);
        yield interaction.deferUpdate();
        if (interaction.customId == "ru") {
            const role = yield ((_b = interaction.guild) === null || _b === void 0 ? void 0 : _b.roles.fetch("1044822047584423936"));
            console.log(role.name);
            const member = yield ((_c = interaction.guild) === null || _c === void 0 ? void 0 : _c.members.fetch((_d = interaction.member) === null || _d === void 0 ? void 0 : _d.user.id));
            yield member.roles.add(role);
        }
        else if (interaction.customId == "en") {
            const role = yield ((_e = interaction.guild) === null || _e === void 0 ? void 0 : _e.roles.fetch("1039314474223554631"));
            const member = yield ((_f = interaction.guild) === null || _f === void 0 ? void 0 : _f.members.fetch((_g = interaction.member) === null || _g === void 0 ? void 0 : _g.user.id));
            yield member.roles.add(role);
        }
    }
}));
client.login("MTA0Mjk3NDUwMTA1MjM2Njg1OA.GhIp4f.wApQinlvaYa9BV5JGhFbAgmhmoggkjkeneA1GU")
    .then(() => {
    var _a, _b;
    (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({ activities: [{ type: discord_js_1.ActivityType.Playing, name: "Admin.mc" }] });
    (_b = client.application) === null || _b === void 0 ? void 0 : _b.commands.set(commands);
});