package com.example;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "TicketCostServlet", urlPatterns = {"/calculate-ticket-cost"})
public class TicketCostServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final double PRICE_PER_TICKET = 12.50;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<html><head><title>Ticket Cost Calculator</title></head><body>");
            out.println("<h1>Ticket Cost Calculator</h1>");
            out.println("<form method=\"post\" action=\"calculate-ticket-cost\">");
            out.println("<label for=\"tickets\">Number of tickets:</label>");
            out.println("<input type=\"number\" id=\"tickets\" name=\"tickets\" min=\"1\" required />");
            out.println("<button type=\"submit\">Calculate</button>");
            out.println("</form>");
            out.println("<footer>@24071A05D9</footer>");
            out.println("</body></html>");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String ticketsParam = request.getParameter("tickets");
        int ticketCount = 0;
        double totalCost = 0.0;
        String message;

        try {
            ticketCount = Integer.parseInt(ticketsParam);
            if (ticketCount < 1) {
                message = "Please enter a valid number of tickets (at least 1).";
            } else {
                totalCost = ticketCount * PRICE_PER_TICKET;
                message = String.format("Total cost for %d tickets is $%.2f.", ticketCount, totalCost);
            }
        } catch (NumberFormatException e) {
            message = "Invalid ticket quantity. Please enter a numeric value.";
        }

        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<html><head><title>Ticket Cost Result</title></head><body>");
            out.println("<h1>Ticket Cost Result</h1>");
            out.println("<p>" + message + "</p>");
            out.println("<a href=\"calculate-ticket-cost\">Calculate again</a>");
            out.println("<footer>@24071A05D9</footer>");
            out.println("</body></html>");
        }
    }
}
