"use client"

import { useActionState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { login, LoginState } from "@/app/(auth)/login/actions"
import { Alert } from "./ui/alert"
import { MessageCircle } from "lucide-react"

export default function LoginForm () {
    const [state, formAction, pending] = useActionState<LoginState, FormData>(
        login,
        {
         success: null,
         message: "",
        }
    )

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Digite seu email para receber um link de login.
                </CardDescription>
            </CardHeader>
                <CardContent>
                    <form action="formAction">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                            id="email" 
                            type="email" 
                            name="email" 
                            placeholder="joão_exemplo@gmail.com" 
                            required 
                            />
                            </div>

                            {state.success === true && (
                                <Alert className="text-muted-foreground">
                                    <MessageCircle />
                                </Alert>
                            )}

                            <Button type="submit" className="w-full">
                            Login
                            </Button>
                        </div>
                    </form>
                </CardContent>
        </Card>
    )
}